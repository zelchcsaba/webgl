import org.w3c.dom.HTMLCanvasElement
import org.khronos.webgl.WebGLRenderingContext as GL
import vision.gears.webglmath.*
import kotlin.js.Date
import kotlin.math.*
import org.w3c.dom.*
import kotlinx.browser.document

class Scene (

  val gl : WebGL2RenderingContext) : UniformProvider("scene") {

  val vsTrafo = Shader(gl, GL.VERTEX_SHADER, "trafo-vs.glsl")
  val fsTextured = Shader(gl, GL.FRAGMENT_SHADER, "textured-fs.glsl")
  val texturedProgram = Program(gl, vsTrafo, fsTextured)

  val vsBackground = Shader(gl, GL.VERTEX_SHADER, "background-vs.glsl")
  val fsBackground = Shader(gl, GL.FRAGMENT_SHADER, "background-fs.glsl")
  val backgroundProgram = Program(gl, vsBackground, fsBackground)

  val quadGeometry = TexturedQuadGeometry(gl)
  val backgroundGeometry = TexturedQuadGeometry(gl)

//háttér anyaga
  val groundMaterial = Material(backgroundProgram).apply{
    this["colorTexture"]?.set(
    Texture2D(gl, "media/ground.png"))
  }

//űrhajó anyaga
  val helicopterMaterial = Material(texturedProgram).apply{
    this["colorTexture"]?.set(
    Texture2D(gl, "media/helicopter.png"))
  }

//propeller anyaga
  val propellerMaterial = Material(texturedProgram).apply{
    this["colorTexture"]?.set(
    Texture2D(gl, "media/propeller.png"))
  }

//felhő anyaga
  val cloudMaterial = Material(texturedProgram).apply{
    this["colorTexture"]?.set(
    Texture2D(gl, "media/cloud.png"))
  }

//lövedék anyaga
  val missileMaterial = Material(texturedProgram).apply{
    this["colorTexture"]?.set(
    Texture2D(gl, "media/missile.png"))
  }

//drón anyaga
  val droneMaterial = Material(texturedProgram).apply{
    this["colorTexture"]?.set(
    Texture2D(gl, "media/drone.png"))
  }

//ágyú anyaga
  val cannonMaterial = Material(texturedProgram).apply{
    this["colorTexture"]?.set(
    Texture2D(gl, "media/cannon.png"))
  }

//épület anyagai
  val building1Material = Material(texturedProgram).apply{
    this["colorTexture"]?.set(
    Texture2D(gl, "media/building1.png"))
  }

  val building2Material = Material(texturedProgram).apply{
    this["colorTexture"]?.set(
    Texture2D(gl, "media/building2.png"))
  }

  val building3Material = Material(texturedProgram).apply{
    this["colorTexture"]?.set(
    Texture2D(gl, "media/building3.png"))
  }

//ejtőernyő anyaga
  val parachuteMaterial = Material(texturedProgram).apply{
    this["colorTexture"]?.set(
    Texture2D(gl, "media/parachute.png"))
  }


//meshek
  val groundMesh = Mesh(groundMaterial, backgroundGeometry)
  val propellerMesh = Mesh(propellerMaterial, quadGeometry)
  val helicopterMesh = Mesh(helicopterMaterial, quadGeometry)
  val cloudMesh = Mesh(cloudMaterial, backgroundGeometry)
  val missileMesh = Mesh(missileMaterial, quadGeometry)
  val droneMesh = Mesh(droneMaterial, quadGeometry)
  val cannonMesh = Mesh(cannonMaterial, quadGeometry)
  val building1Mesh = Mesh(building1Material, backgroundGeometry)
  val building2Mesh = Mesh(building2Material, backgroundGeometry)
  val building3Mesh = Mesh(building3Material, backgroundGeometry)
  val parachuteMesh = Mesh(parachuteMaterial, quadGeometry)

//tömb a gameobjektek tárolására
  val gameObjects = ArrayList<GameObject>()

//háttérobjektum
  val ground = GameObject(groundMesh).apply{
    radius = 0.0f
  }

  val propeller = GameObject(propellerMesh).apply{
    scale.set(0.2f, 0.2f)
    radius = 0.2f
  }

//avatar objektum
  val avatar = Avatar(propeller, helicopterMesh).apply{
    position.set(0.5f, 0.5f)
    scale.set(0.2f, 0.2f)
    radius = 0.2f
  }

//felhő objektumok
  val cloud1 = BouncingObject(cloudMesh).apply{
    position.set(-0.5f, 1.5f)
    scale.set(0.2f, 0.2f)
    radius = 0.2f
  }

  val cloud2 = BouncingObject(cloudMesh).apply{
    position.set(1.5f, -0.5f)
    scale.set(0.3f, 0.3f)
    radius = 0.3f
  }

  val cloud3 = BouncingObject(cloudMesh).apply{
    position.set(-1.5f, -0.5f)
    scale.set(0.25f, 0.25f)
    radius = 0.25f
  }

  val cloud4 = BouncingObject(cloudMesh).apply{
    position.set(0.0f, -1.5f)
    scale.set(0.15f, 0.15f)
    radius = 0.15f
  }

//drón objektum
  val drone = Drone(avatar, droneMesh).apply{
    position.set(0.0f, 0.5f)
    scale.set(0.1f, 0.1f)
    radius = 0.1f
  }

//ágyú objektum
  val cannon = Cannon(avatar, cannonMesh).apply {
    position.set(-0.8f, 0.5f)
    scale.set(0.2f, 0.2f)
    radius = 0.2f
  }

//épület objektumok
  val building1 = Building(building1Mesh).apply{
    position.set(2.0f, 0.0f)
    scale.set(0.2f, 0.2f)
    radius = 0.2f
  }

  val building2 = Building(building2Mesh).apply{
    position.set(1.0f, 2.0f)
    scale.set(0.2f, 0.2f)
    radius = 0.2f
  }

  val building3 = Building(building3Mesh).apply{
    position.set(-2.0f, -2.2f)
    scale.set(0.2f, 0.2f)
    radius = 0.2f
  }

//ortho kamera
  val camera = OrthoCamera()

  val timeAtFirstFrame = Date().getTime()
  var timeAtLastFrame =  timeAtFirstFrame

  var timeToNextShoot = 3.0f

  init{
    gameObjects+=ground
    gameObjects+=building1
    gameObjects+=building2
    gameObjects+=building3
    gameObjects+=cannon
    gameObjects+=drone
    gameObjects+=avatar
    gameObjects+=propeller
    gameObjects+=cloud1
    gameObjects+=cloud2
    gameObjects+=cloud3
    gameObjects+=cloud4
    gameObjects+=cannon

  }

  fun resize(gl : WebGL2RenderingContext, canvas : HTMLCanvasElement) {
    gl.viewport(0, 0, canvas.width, canvas.height)
    
    val aspect = canvas.width.toFloat() / canvas.height.toFloat()
    camera.setAspectRatio(aspect)
  }

  @Suppress("UNUSED_PARAMETER")
  fun update(gl : WebGL2RenderingContext, keysPressed : Set<String>) {

    val timeAtThisFrame = Date().getTime() 
    val dt = (timeAtThisFrame - timeAtLastFrame).toFloat() / 1000.0f
    val t  = (timeAtThisFrame - timeAtFirstFrame).toFloat() / 1000.0f    
    timeAtLastFrame = timeAtThisFrame

    gl.enable(GL.BLEND)
    gl.blendFunc(GL.SRC_ALPHA, GL.ONE_MINUS_SRC_ALPHA)

    // clear the screen
    gl.clearColor(0.2f, 0.0f, 0.5f, 1.0f)
    gl.clearDepth(1.0f)
    gl.clear(GL.COLOR_BUFFER_BIT or GL.DEPTH_BUFFER_BIT)

    gl.useProgram(texturedProgram.glProgram)

    val spawn = ArrayList<GameObject>()
    val killList = ArrayList<GameObject>() 

//ha mindhárom épület biztonságos, az ágyú megsemmisül
    if(building1.isSafe && building2.isSafe && building3.isSafe){
      cannon.setIsdead()
    }

//lövedék kilövése 3 másodpercenként, ha az ágyú nem semmisült meg
    timeToNextShoot -= dt
    if(timeToNextShoot < 0.0f && cannon.isDead == false){
        timeToNextShoot = 3.0f
        val projectile = cannon.shoot(missileMesh)
        if(projectile != null) spawn.add(projectile)
    }

//avatar ejtőernyő lövés a space gombbal
    if(keysPressed.contains("SPACE")){
      val parachute = avatar.shoot(parachuteMesh)
      if(parachute != null) spawn.add(parachute)
    }

    gameObjects.forEach { 
      if(!it.move(dt, t, keysPressed, gameObjects, spawn )){
        killList.add(it)
      }
    }
    killList.forEach{ gameObjects.remove(it) }
    spawn.forEach{ gameObjects.add(it) }
    gameObjects.forEach{ it.update() }

//kamera követi az avatar pozícióját
    camera.position.set(avatar.position.x, avatar.position.y)
    camera.update()

//gameObjectek kirajzolása
    gameObjects.forEach{ it.draw(camera) }
    
  }

}
