import org.w3c.dom.HTMLCanvasElement
import org.khronos.webgl.WebGLRenderingContext as GL //# GL# we need this for the constants declared ˙HUN˙ a constansok miatt kell
import vision.gears.webglmath.*


class Scene (
  val gl : WebGL2RenderingContext){

  //textúra a sprite-hoz
  val spritesTexture = Texture2D(gl, "media/platformer_sprites_base.png")
  val spritesX = 8
  val spritesY = 8
  var phase = 0f
  var indexY = 0f
  var szalad = true
  var stop = true

  val vsIdle = Shader(gl, GL.VERTEX_SHADER, "idle-vs.glsl")
  val fsSolid = Shader(gl, GL.FRAGMENT_SHADER, "solid-fs.glsl")
  val solidProgram = Program(gl, vsIdle, fsSolid)
  val quadGeometry = TexturedQuadGeometry(gl)

  fun resize(gl : WebGL2RenderingContext, canvas : HTMLCanvasElement) {
    gl.viewport(0, 0, canvas.width, canvas.height)//#viewport# tell the rasterizer which part of the canvas to draw to ˙HUN˙ a raszterizáló ide rajzoljon
  }

  @Suppress("UNUSED_PARAMETER")
  fun update(gl : WebGL2RenderingContext, keysPressed : Set<String>) {
    gl.clearColor(0.0f, 0.0f, 0.0f, 1.0f) //fekete
    gl.clearDepth(1.0f)
    gl.clear(GL.COLOR_BUFFER_BIT or GL.DEPTH_BUFFER_BIT)

    //gombnyomással válthatunk, hogy fut vagy sétál
    if ("F" in keysPressed) {
      indexY = 0f
      szalad = true
      stop = false
    }
    if ("S" in keysPressed) {
      indexY = 4.0f/8.0f
      szalad = false
      stop = false
    }
    if("SPACE" in keysPressed){
      stop = true
    }

    //animáció sebessége aszerint, hogy éppen fut vagy sétál
    if(!stop){
      if (szalad) {
        phase += 0.01f
      }else{
        phase += 0.005f
      }
    }

    if (phase >= 1f) phase -= 1f

    val indexX = (phase * spritesX).toInt() % spritesX

    //sprite offset és scale
    val spriteOffset = Vec2(indexX / spritesX.toFloat(),indexY)
    val spriteScale = Vec2(1.0f / spritesX, 1.0f / spritesY)   

    gl.useProgram(solidProgram.glProgram)

    //colorTexture nevű uniform változóhoz a 0-s textúraegységet rendeljük
    gl.uniform1i(gl.getUniformLocation(solidProgram.glProgram, "colorTexture"), 0)

    gl.activeTexture(GL.TEXTURE0)
    gl.bindTexture(GL.TEXTURE_2D, spritesTexture.glTexture)

    //uniform változók beállítása
    gl.uniform2f(gl.getUniformLocation(solidProgram.glProgram, "spriteOffset"), spriteOffset.x, spriteOffset.y)
    gl.uniform2f(gl.getUniformLocation(solidProgram.glProgram, "spriteScale"), spriteScale.x, spriteScale.y)
    gl.uniform2f(gl.getUniformLocation(solidProgram.glProgram, "characterPos"), spriteOffset.x, 0.0f)

    quadGeometry.draw()

  }
}
