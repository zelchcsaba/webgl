import vision.gears.webglmath.UniformProvider
import vision.gears.webglmath.*
import kotlin.math.*

// GameObject osztály, amely egy általános játékelem
open class GameObject(vararg meshes : Mesh) : UniformProvider("gameObject") {

  var position = Vec3()
  var roll = 0.0f 
  val scale = Vec3(1.0f, 1.0f, 1.0f)  
  var radius = 1.0f
  var isDead = false

  val modelMatrix by Mat4()

  init {
    addComponentsAndGatherUniforms(*meshes)
  }

  fun update(){
    modelMatrix.set() 
    modelMatrix
      .scale(scale)        
      .rotate(roll, 0.0f, 0.0f, 1.0f) 
      .translate(position) 
  }

  //Meghívásra beállítja az isDead változót true-ra
  open fun setIsdead(){
      isDead = true
  }

  open inner class Motion(val gameObject : GameObject){
    open operator fun invoke(
      dt : Float,
      t : Float,
      keysPressed : Set<String>,
      interactors : ArrayList<GameObject>,
      spawn : ArrayList<GameObject>
      ) : Boolean {
        if(!isDead){
                return true
        }else{
                return false
            }
    }
  }
  var move = Motion(this)

}