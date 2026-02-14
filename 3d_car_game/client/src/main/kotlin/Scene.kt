import org.w3c.dom.HTMLCanvasElement
import org.khronos.webgl.WebGLRenderingContext as GL
import org.khronos.webgl.Float32Array
import vision.gears.webglmath.UniformProvider
import vision.gears.webglmath.Vec3
import vision.gears.webglmath.Mat4
import kotlin.js.Date
import kotlin.math.*
import kotlin.random.Random

class Scene (
  
  val gl : WebGL2RenderingContext) : UniformProvider("scene") {

  // shaderek és programok
  val vsTrafo = Shader(gl, GL.VERTEX_SHADER, "trafo-vs.glsl")

  val fsEnvmapped = Shader(gl, GL.FRAGMENT_SHADER, "envmapped-fs.glsl")
  val envmappedProgram = Program(gl, vsTrafo, fsEnvmapped)

  val fsPhongBlinn = Shader(gl, GL.FRAGMENT_SHADER, "phongblinn-fs.glsl") 
  val phongBlinnProgram = Program(gl, vsTrafo, fsPhongBlinn)

  val vsQuad = Shader(gl, GL.VERTEX_SHADER, "quad-vs.glsl")
  val fsBackground = Shader(gl, GL.FRAGMENT_SHADER, "background-fs.glsl")
  val backgroundProgram = Program(gl, vsQuad, fsBackground)

  val quadGeometry = TexturedQuadGeometry(gl)
  val trackGeometry = Track(gl)

  val backgroundMaterial = Material(backgroundProgram)

  // Égbolt textúra
  val skyCubeTexture = TextureCube(gl,
      "media/sky/px.png", "media/sky/nx.png",
      "media/sky/py.png", "media/sky/ny.png",
      "media/sky/pz.png", "media/sky/nz.png"
    )
  init {
    backgroundMaterial["envTexture"]?.set( skyCubeTexture )
  }
  val backgroundMesh = Mesh(backgroundMaterial, quadGeometry)
  
  // pálya
  val trackTexture = Texture2D(gl, "media/track.jpg")
  val trackMaterial = Material(phongBlinnProgram)
  init {
    trackMaterial["phongTexture"]?.set(trackTexture)
    trackMaterial["shininess"]?.set(20.0f)
    trackMaterial["specularColor"]?.set(Vec3(0.1f, 0.1f, 0.1f))
  }
  
  val trackMesh = Mesh(trackMaterial, trackGeometry)
  val track = GameObject(trackMesh).apply {
    pitch = (PI/2).toFloat()
    scale.x = 200.0f
    scale.y = 200.0f
    scale.z = 200.0f
    position.y = 94f
  }

  // autó 
  val chevyTexture = Texture2D(gl, "media/chevy/chevy.png")

  val phongChevyMaterial = Material(phongBlinnProgram)
  init{
    phongChevyMaterial["phongTexture"]?.set(chevyTexture)
    phongChevyMaterial["shininess"]?.set(60.0f)
    phongChevyMaterial["specularColor"]?.set(Vec3(0.8f, 0.8f, 0.8f))
  }

  // ház
  val house1Texture = Texture2D(gl, "media/house1.jpg")
  val house1Material = Material(phongBlinnProgram)
  init{
    house1Material["phongTexture"]?.set(house1Texture)
    house1Material["shininess"]?.set(20.0f)
    house1Material["specularColor"]?.set(Vec3(0.3f, 0.3f, 0.3f))
  }

  val house2Texture = Texture2D(gl, "media/house2.jpg")
  val house2Material = Material(phongBlinnProgram)
  init{
    house2Material["phongTexture"]?.set(house2Texture)
    house2Material["shininess"]?.set(20.0f)
    house2Material["specularColor"]?.set(Vec3(0.3f, 0.3f, 0.3f))
  }

  val house3Texture = Texture2D(gl, "media/house3.jpg")
  val house3Material = Material(phongBlinnProgram)
  init{
    house3Material["phongTexture"]?.set(house3Texture)
    house3Material["shininess"]?.set(20.0f)
    house3Material["specularColor"]?.set(Vec3(0.3f, 0.3f, 0.3f))
  }

  val house4Texture = Texture2D(gl, "media/house4.jpg")
  val house4Material = Material(phongBlinnProgram)
  init{
    house4Material["phongTexture"]?.set(house4Texture)
    house4Material["shininess"]?.set(20.0f)
    house4Material["specularColor"]?.set(Vec3(0.3f, 0.3f, 0.3f))
  }

  // gömb
  val ballTexture = Texture2D(gl, "media/ball.jpg")
  val ballMaterial = Material(phongBlinnProgram)
  init{
    ballMaterial["phongTexture"]?.set(ballTexture)
    ballMaterial["shininess"]?.set(40.0f)
    ballMaterial["specularColor"]?.set(Vec3(0.5f, 0.5f, 0.5f))
  }

  // játékobjektumok
  val jsonLoader = JsonLoader()
  val chevyGeometries = jsonLoader.loadGeometries(gl,"media/chevy/chassis.json")
  val chevyMeshes = arrayOf(Mesh(phongChevyMaterial, chevyGeometries[0]), )

  val wheelGeometries = jsonLoader.loadGeometries(gl,"media/chevy/wheel.json")
  val wheelMeshes = arrayOf(Mesh(phongChevyMaterial, wheelGeometries[0]), )

  val house1Geometries = jsonLoader.loadGeometries(gl,"media/output.json")
  val house2Geometries = jsonLoader.loadGeometries(gl,"media/output.json")
  val house3Geometries = jsonLoader.loadGeometries(gl,"media/output.json")
  val house4Geometries = jsonLoader.loadGeometries(gl,"media/output.json")

  val house1Meshes = arrayOf(Mesh(house1Material, house1Geometries[0]), )
  val house2Meshes = arrayOf(Mesh(house2Material, house2Geometries[0]), )
  val house3Meshes = arrayOf(Mesh(house3Material, house3Geometries[0]), )
  val house4Meshes = arrayOf(Mesh(house4Material, house4Geometries[0]), )

  val houseMeshList = arrayOf(
    house1Meshes,
    house2Meshes,
    house3Meshes,
    house4Meshes
)

  val sphereGeometries = jsonLoader.loadGeometries(gl,"media/sphere.json")
  val sphereMeshes = arrayOf(Mesh(ballMaterial, sphereGeometries[0]), )

  // gömb játékobjektum
  val sphere1 = Roller(*sphereMeshes).apply {
    scale.set(5f,5f,5f)
    position.set(140f, -1f, 50f)
    radius = 5f
  }

  // gömb játékobjektum
  val sphere2 = Roller(*sphereMeshes).apply {
    scale.set(5f,5f,5f)
    position.set(-120f, -1f, 50f)
    radius = 5f
  }

  // gömb játékobjektum
  val sphere3 = Roller(*sphereMeshes).apply {
    scale.set(5f,5f,5f)
    position.set(0f, -1f, 110f)
    radius = 5f
  }

  // autó kerekek és autó
  val wheels = Array<GameObject>(4) { GameObject(*wheelMeshes) }

  val chevy = Avatar(wheels, *chevyMeshes).apply {
    position.set(150f, 0f, 0f)
    radius = 20f
  }

  // játékobjektumok listája
  val gameObjects = ArrayList<GameObject>()
  init{

    gameObjects.add(track)
    gameObjects.add(chevy)
    gameObjects.addAll(wheels)
    gameObjects.add(sphere1)
    gameObjects.add(sphere2)
    gameObjects.add(sphere3)

  }

// házak elhelyezése körben
init {
  val numberOfHouses = 28
  val radiusCircle = 200f
  
  val center = Vec3(0f, 0f, 0f)

  //külső kör
  for (i in 0 until numberOfHouses) {

    val angle = (i * (2 * PI / numberOfHouses)).toFloat()
    val x = center.x + radiusCircle * cos(angle.toDouble()).toFloat()
    val z = center.z + radiusCircle * sin(angle.toDouble()).toFloat()

    val tx = -radiusCircle * sin(angle.toDouble()).toFloat()
    val tz =  radiusCircle * cos(angle.toDouble()).toFloat()

    var yawAngle = atan2(tx.toDouble(), tz.toDouble()).toFloat()

    val selectedMeshes = houseMeshList[Random.nextInt(houseMeshList.size)]
    val house = Flipper(*selectedMeshes).apply {

        scale.set(20f, 20f, 20f)
        position.set(x, 14f, z)
        radius = 25f
        pitch = (PI / 2).toFloat()
        bounceForce = 30f
        yaw = yawAngle

    }

    gameObjects.add(house)

}

val numberOfHouses2 = 6
val radiusCircle2 = 55f

//belső kör
for (i in 0 until numberOfHouses2) {

    val angle = (i * (2 * PI / numberOfHouses2)).toFloat()
    val x = center.x + radiusCircle2 * cos(angle.toDouble()).toFloat()
    val z = center.z + radiusCircle2 * sin(angle.toDouble()).toFloat()

    val tx = -radiusCircle2 * sin(angle.toDouble()).toFloat()
    val tz =  radiusCircle2 * cos(angle.toDouble()).toFloat()

    var yawAngle = atan2(tx.toDouble(), tz.toDouble()).toFloat()

    val selectedMeshes = houseMeshList[Random.nextInt(houseMeshList.size)]
    val house = Flipper(*selectedMeshes).apply {

        scale.set(20f, 20f, 20f)
        position.set(x, 14f, z)
        radius = 25f
        pitch = (PI / 2).toFloat()
        bounceForce = 30f
        yaw = yawAngle

    }

    gameObjects.add(house)

  }

}


  // világítás
  val lights = Array<Light>(3) { Light(it, *Program.all) }
  init{
    lights[0].position.set(1.0f, 1.0f, 0.0f, 0.0f)
    lights[0].powerDensity.set(1.0f, 1.0f, 1.0f)
    lights[1].position.set(0.0f, 1.0f, 1.0f, 0.0f)
    lights[1].powerDensity.set(1.0f, 1.0f, 1.0f)
    lights[2].position.set(-1.0f, 0.0f, -1.0f, 0.0f)
    lights[2].powerDensity.set(0.5f, 0.5f, 0.5f)
  }

  // kamera
  val camera = HelicopterCamera(*Program.all)
  
  // Kamera beállítások
  init {
    camera.kLinear = 80f      
    camera.cLinear = 15f       
    camera.kAngular = 50f    
    camera.cAngular = 12f       
    camera.cameraOffset = Vec3(0f, 10f, -40f) 
    camera.radius = 40f
  }

  val timeAtFirstFrame = Date().getTime()
  var timeAtLastFrame =  timeAtFirstFrame
  
  // Kamera inicializálás jelző
  var cameraInitialized = false

  init{
    gl.enable(GL.DEPTH_TEST)
    addComponentsAndGatherUniforms(*Program.all)
  }

  fun resize(gl : WebGL2RenderingContext, canvas : HTMLCanvasElement) {
    gl.viewport(0, 0, canvas.width, canvas.height)
    camera.setAspectRatio(canvas.width.toFloat() / canvas.height.toFloat())
  }

  // Frissítés és rajzolás
  fun update(gl : WebGL2RenderingContext, keysPressed : Set<String>) {

    val timeAtThisFrame = Date().getTime() 
    val dt = (timeAtThisFrame - timeAtLastFrame).toFloat() / 1000.0f
    val t  = (timeAtThisFrame - timeAtFirstFrame).toFloat() / 1000.0f    
    timeAtLastFrame = timeAtThisFrame
    
    // Első frame-nél inicializáljuk a kamerát az autó mögött
    if (!cameraInitialized) {
      camera.initialize(chevy)
      cameraInitialized = true
    }
    
    // Kamera frissítése
    camera.updateHelicopter(dt, chevy)
    camera.move(dt, keysPressed)

    gl.clearColor(0.3f, 0.0f, 0.3f, 1.0f)
    gl.clearDepth(1.0f)
    gl.clear(GL.COLOR_BUFFER_BIT or GL.DEPTH_BUFFER_BIT)

    // Játékobjektumok frissítése
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
    gameObjects.forEach { it.draw( camera, *lights) }

  }
}