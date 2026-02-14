import vision.gears.webglmath.*
import kotlin.math.exp
import kotlin.math.PI
import kotlin.math.floor

open class GameObject(
  vararg val meshes : Mesh
   ) : UniformProvider("gameObject") {

  val position = Vec3()
  val scale = Vec3(1.0f, 1.0f, 1.0f)

  val modelMatrix by Mat4()
  val modelMatrixInverse by Mat4()
  var yaw = 0.0f   // Y tengely körüli forgás
  var pitch = 0.0f // X tengely körüli forgás
  var roll = 0.0f  // Z tengely körüli forgás
  var radius = 1.0f
  var parent : GameObject? = null

  init { 
    addComponentsAndGatherUniforms(*meshes)
  }

  fun update() {
    modelMatrix.set().
      scale(scale).
      rotate(pitch, 1f, 0f, 0f).  
      rotate(yaw,   0f, 1f, 0f).  
      rotate(roll,  0f, 0f, 1f).  
      translate(position)
    parent?.let{ parent -> 
      modelMatrix *= parent.modelMatrix
    }

    modelMatrixInverse.set(modelMatrix).invert()
    
  }

  open inner class Motion {
    open operator fun invoke(
      t : Float, 
      dt : Float, 
      keysPressed : Set<String> = emptySet<String>(), 
      gameObjects : List<GameObject> = emptyList<GameObject>(),
      spawn : List<GameObject> = emptyList<GameObject>()
      ) : Boolean { 
        return true 
    }
  }
  var move = Motion()

}
