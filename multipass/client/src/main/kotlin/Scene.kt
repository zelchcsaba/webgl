import org.w3c.dom.HTMLCanvasElement
import org.khronos.webgl.WebGLRenderingContext as GL
import org.khronos.webgl.Float32Array
import vision.gears.webglmath.UniformProvider
import vision.gears.webglmath.Vec3
import vision.gears.webglmath.Mat4
import kotlin.js.Date
import kotlin.math.*

class Scene (
  val gl : WebGL2RenderingContext) : UniformProvider("scene") {

  val vstransform = Shader(gl, GL.VERTEX_SHADER, "transform-vs.glsl")

  val fsTextured = Shader(gl, GL.FRAGMENT_SHADER, "textured-fs.glsl")
  val texturedProgram = Program(gl, vstransform, fsTextured)

  val fsTexturedNoise = Shader(gl, GL.FRAGMENT_SHADER, "texturednoise-fs.glsl")
  val texturedNoiseProgram = Program(gl, vstransform, fsTexturedNoise)

  val fsEnvmapped = Shader(gl, GL.FRAGMENT_SHADER, "envmapped-fs.glsl")
  val envmappedProgram = Program(gl, vstransform, fsEnvmapped)

  val fsPhong = Shader(gl, GL.FRAGMENT_SHADER, "phong-fs.glsl")
  val phongProgram = Program(gl, vstransform, fsPhong)

  val fsMaxBlinn = Shader(gl, GL.FRAGMENT_SHADER, "maxblinn-fs.glsl")
  val maxBlinnProgram = Program(gl, vstransform, fsMaxBlinn) 

  val vsQuad = Shader(gl, GL.VERTEX_SHADER, "quad-vs.glsl")
  val fsBackground = Shader(gl, GL.FRAGMENT_SHADER, "background-fs.glsl")
  val backgroundProgram = Program(gl, vsQuad, fsBackground)

  // Framebuffer-ek
  lateinit var defaultFramebuffer : DefaultFramebuffer  
  lateinit var reflectionFramebuffer : Framebuffer
  lateinit var visszapillantoFramebuffer : Framebuffer

  val flipQuadGeometry = FlipQuadGeometry(gl)
  val quadGeometry = TexturedQuadGeometry(gl)

  // Háttér
  val backgroundMaterial = Material(backgroundProgram)
  val skyCubeTexture = TextureCube(gl,
      "media/posx512.jpg", "media/negx512.jpg",
      "media/posy512.jpg", "media/negy512.jpg",
      "media/posz512.jpg", "media/negz512.jpg"
    )
  init {
    backgroundMaterial["envTexture"]?.set( skyCubeTexture )
  }

  val backgroundMesh = Mesh(backgroundMaterial, quadGeometry)

  // Slowpoke
  val planeTexture = Texture2D(gl, "media/texture.png")
  //slowpoke normal map
  val normalTexture = Texture2D(gl, "media/normal.png")

  val jsonLoader = JsonLoader()
  val slowpokeGeometries = jsonLoader.loadGeometries(gl,
    "media/slowpoke/slowpoke.json")
  
  // Slowpoke normal map material
  val normalMapSlowpokeMaterial1 = Material(phongProgram)
  init{
    normalMapSlowpokeMaterial1["kd"]?.set(Vec3(0.6f, 0.2f, 0.1f))
    normalMapSlowpokeMaterial1["ks"]?.set(Vec3(1f, 1f, 1f))
    normalMapSlowpokeMaterial1["shininess"]?.set(15f)
    normalMapSlowpokeMaterial1["normalMap"]?.set(normalTexture)
  }
  val normalMapSlowpokeEyeMaterial1 = Material(phongProgram)  
  init{
    normalMapSlowpokeEyeMaterial1["kd"]?.set(Vec3(0.6f, 0.2f, 0.1f))
    normalMapSlowpokeEyeMaterial1["ks"]?.set(Vec3(1f, 1f, 1f))
    normalMapSlowpokeEyeMaterial1["shininess"]?.set(15f)
    normalMapSlowpokeEyeMaterial1["normalMap"]?.set(normalTexture)
  }  

  val normalMapSlowpokeMaterial2 = Material(phongProgram)
  init{
    normalMapSlowpokeMaterial2["kd"]?.set(Vec3(0.6f, 1.0f, 0.1f))
    normalMapSlowpokeMaterial2["ks"]?.set(Vec3(1f, 1f, 1f))
    normalMapSlowpokeMaterial2["shininess"]?.set(15f)
    normalMapSlowpokeMaterial2["normalMap"]?.set(normalTexture)
  }
  val normalMapSlowpokeEyeMaterial2 = Material(phongProgram)  
  init{
    normalMapSlowpokeEyeMaterial2["kd"]?.set(Vec3(0.6f, 1.0f, 0.1f))
    normalMapSlowpokeEyeMaterial2["ks"]?.set(Vec3(1f, 1f, 1f))
    normalMapSlowpokeEyeMaterial2["shininess"]?.set(15f)
    normalMapSlowpokeEyeMaterial2["normalMap"]?.set(normalTexture)
  }  

  val normalMapSlowpokeMeshes1 = arrayOf( 
    Mesh(normalMapSlowpokeMaterial1, slowpokeGeometries[0]),
    Mesh(normalMapSlowpokeEyeMaterial1, slowpokeGeometries[1])
  )
  
  val normalMapSlowpokeMeshes2 = arrayOf( 
    Mesh(normalMapSlowpokeMaterial2, slowpokeGeometries[0]),
    Mesh(normalMapSlowpokeEyeMaterial2, slowpokeGeometries[1])
  )

  // Síklap, spot fényhez
  val planeGeometry = TexturedQuadGeometry(gl)
  val planeMaterial = Material(maxBlinnProgram)
  init{
    planeMaterial["shadedTexture"]?.set(planeTexture)
    planeMaterial["shininess"]?.set(50f)
    planeMaterial["specularColor"]?.set(Vec3(1.0f, 1.0f, 1.0f))
  }
  val planeMesh = Mesh(planeMaterial, planeGeometry)


  // tükrözött síklap
  val mirrorPlaneMaterial = Material(texturedNoiseProgram)
  val mirrorPlaneMesh = Mesh(mirrorPlaneMaterial, flipQuadGeometry)

  lateinit var mirrorPlaneObject: GameObject

  // visszapillantó síklap
  val visszapillantoMaterial = Material(texturedProgram)
  val visszapillantoMesh = Mesh(visszapillantoMaterial, flipQuadGeometry)

  lateinit var visszapillantoObject: GameObject

  // Játékobjektumok
  val gameObjects = ArrayList<GameObject>()
  
  init{
    val normalMapObject1 = GameObject(*normalMapSlowpokeMeshes1).apply{
      position.set(15.0f, 0.0f, 0.0f)
      yaw = -PI.toFloat()/2.0f
    }
    gameObjects += normalMapObject1

    val normalMapObject2 = GameObject(*normalMapSlowpokeMeshes2).apply{
      position.set(-15.0f, 0.0f, 0.0f)
      yaw = PI.toFloat()/2.0f
    }
    gameObjects += normalMapObject2

    val planeObject = GameObject(planeMesh).apply{
      position.set( 0.0f, 0.0f, 0.0f)
      scale.set(5.0f, 5.0f, 5.0f)
      pitch = PI.toFloat()/2.0f 
    }
    gameObjects += planeObject 

    mirrorPlaneObject = GameObject(mirrorPlaneMesh).apply{
      position.set( 15.0f, 5.0f, -20.0f) 
      scale.set(10.0f, 10.0f, 10.0f)
    }
    gameObjects += mirrorPlaneObject

    visszapillantoObject = GameObject(visszapillantoMesh).apply{
      position.set( -15.0f, 5.0f, -20.0f)
      scale.set(10.0f, 10.0f, 10.0f)
    }
    gameObjects += visszapillantoObject
  }

  // Fények
  val lights = Array<Light>(3) { Light(it, *Program.all) }
  init{

    lights[0].position.set(0.0f, 0.0f, 0.0f, 1.0f);
    lights[0].powerDensity.set(8.0f, 8.0f, 8.0f);
    lights[0].direction.set(0.0f, -1.0f,  0.0f);
    lights[0]["coneCos"]?.set( 0.707f )
    lights[0]["falloff"]?.set( 3.5f )

    lights[1].position.set(0.0f, 0.0f, 1.0f, 0.0f);
    lights[1].powerDensity.set(1.0f, 1.0f, 1.0f);

    lights[2].position.set(0.0f, 1.0f, -1.0f, 0.0f);
    lights[2].powerDensity.set(0.2f, 0.2f, 0.2f);

  }

  // Kamera
  val camera = PerspectiveCamera(*Program.all).apply{
    position.set(0.0f, 5.0f, 10.0f)
  }

  // Tükör kamera
  val mirrorCamera = PerspectiveCamera(*Program.all)

  // Visszapillantó kamera
  val visszapillantoCamera = PerspectiveCamera(*Program.all)

  val timeAtFirstFrame = Date().getTime()
  var timeAtLastFrame =  timeAtFirstFrame

  init{
    gl.enable(GL.DEPTH_TEST)
    addComponentsAndGatherUniforms(*Program.all)
  }

  fun resize(gl : WebGL2RenderingContext, canvas : HTMLCanvasElement) {

    gl.viewport(0, 0, canvas.width, canvas.height)
    camera.setAspectRatio(canvas.width.toFloat() / canvas.height.toFloat())
    mirrorCamera.setAspectRatio(canvas.width.toFloat() / canvas.height.toFloat())
    visszapillantoCamera.setAspectRatio(canvas.width.toFloat() / canvas.height.toFloat())

    defaultFramebuffer = DefaultFramebuffer(canvas.width, canvas.height)

    reflectionFramebuffer = Framebuffer(gl, 1,canvas.width, canvas.height)
    
    mirrorPlaneMaterial["colorTexture"]?.set(reflectionFramebuffer.targets[0] )

    visszapillantoFramebuffer = Framebuffer(gl, 1,canvas.width, canvas.height)

    visszapillantoMaterial["colorTexture"]?.set(visszapillantoFramebuffer.targets[0] )

  }

  fun update(gl : WebGL2RenderingContext, keysPressed : Set<String>) {

    val timeAtThisFrame = Date().getTime() 
    val dt = (timeAtThisFrame - timeAtLastFrame).toFloat() / 1000.0f
    val t  = (timeAtThisFrame - timeAtFirstFrame).toFloat() / 1000.0f    
    timeAtLastFrame = timeAtThisFrame

    // Fő kamera mozgatása
    camera.move(dt, keysPressed)

    //  Tükör kamera pozíció és irány
    val nMirror = Vec3(0.0f, 0.0f, 1.0f) 
    val vMirror = camera.position - mirrorPlaneObject.position
    val mirrorPosition = Vec3(camera.position.x, camera.position.y, mirrorPlaneObject.position.z - vMirror.z)

    val reflectedForward = camera.ahead - nMirror * (2f * camera.ahead.dot(nMirror))

    val dir = reflectedForward.normalize()
    val mirroredYaw = atan2(-dir.x, -dir.z)
    val mirroredPitch = asin(-dir.y)
    val mirroredRoll = 0f
        
    mirrorCamera.position.set(mirrorPosition)
    mirrorCamera.yaw = mirroredYaw
    mirrorCamera.pitch = mirroredPitch
    mirrorCamera.roll = mirroredRoll
    mirrorCamera.update()

    // Tükör framebuffer renderelése
    reflectionFramebuffer.bind(gl)
    gl.clearColor(0.3f, 0.0f, 0.3f, 1.0f)
    gl.clearDepth(1.0f)
    gl.clear(GL.COLOR_BUFFER_BIT or GL.DEPTH_BUFFER_BIT)
    
    backgroundMesh.draw(mirrorCamera)
    
    gameObjects.forEach { gameObject ->
      if(gameObject != mirrorPlaneObject) {
        gameObject.draw(mirrorCamera, *lights)
      }
    }


    // Visszapillantó kamera pozíció és irány
    val nVisszapillanto = Vec3(0.0f, 0.0f, 1.0f) 
    val vVisszapillanto = camera.position - visszapillantoObject.position
  
    val reflected = vVisszapillanto - nVisszapillanto
    val rx = reflected.x
    val ry = reflected.y
    val rz = reflected.z

    val yaw   = atan2(rx, -rz)     
    val pitch = asin(-ry / reflected.length())  
    val roll  = 0.0f   
    
    visszapillantoCamera.position.set(visszapillantoObject.position)
    visszapillantoCamera.yaw = yaw
    visszapillantoCamera.pitch = pitch
    visszapillantoCamera.roll = roll
    visszapillantoCamera.update()

    // Visszapillantó framebuffer renderelése
    visszapillantoFramebuffer.bind(gl)

    gl.clearColor(0.3f, 0.0f, 0.3f, 1.0f)
    gl.clearDepth(1.0f)
    gl.clear(GL.COLOR_BUFFER_BIT or GL.DEPTH_BUFFER_BIT)

    backgroundMesh.draw(visszapillantoCamera)
    
    gameObjects.forEach { gameObject ->
      if(gameObject != visszapillantoObject) {
        gameObject.draw(visszapillantoCamera, *lights)
      }
    }

    // Alap framebuffer renderelése
    defaultFramebuffer.bind(gl)

    gl.clearColor(0.3f, 0.0f, 0.3f, 1.0f)
    gl.clearDepth(1.0f)
    gl.clear(GL.COLOR_BUFFER_BIT or GL.DEPTH_BUFFER_BIT)

    val spawn = ArrayList<GameObject>()
    val killList = ArrayList<GameObject>()    
    gameObjects.forEach { 
      if(!it.move(t, dt, keysPressed, gameObjects, spawn)){
        killList.add(it)
      }
    }
    killList.forEach{ gameObjects.remove(it) }
    spawn.forEach{ gameObjects.add(it) }

    gameObjects.forEach { it.update() }

    backgroundMesh.draw(camera)
    gameObjects.forEach { it.draw(camera, *lights) }

  }
}