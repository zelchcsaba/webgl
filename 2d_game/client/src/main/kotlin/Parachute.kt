import vision.gears.webglmath.*
import kotlin.math.*

// Parachute osztály, amely egy ejtőernyőt képvisel
class Parachute(val direction : Vec3, vararg meshes:Mesh) : GameObject(*meshes){
    val velocity = direction
    val maxDistance = 5.0f
    val startPosition = Vec3()

    // Parachute saját mozgás logikája
    inner class ParachuteMotion(gameObject: GameObject): Motion(gameObject){

        override operator fun invoke(
            dt: Float,
            t: Float,
            keysPressed: Set<String>,
            interactors: ArrayList<GameObject>,
            spawn: ArrayList<GameObject>
        ): Boolean {

            position.plusAssign(velocity * dt*0.2f)

            // Ellenőrizzük, hogy elérte-e a maximális távolságot
            if((position - startPosition).length() > maxDistance){
                return false
            }

            // Ütközés detektálása és kezelése az épületekkel
            for (other in interactors) {
                if (other is Building && !other.isDead) {
                    if (checkCollision(this@Parachute, other)) {
                        this@Parachute.isDead = true
                        other.isSafe = true
                        return false
                    }
                }
            }

            if(!isDead){
                return true
            }else{
                return false
            }
            
        }   
    
    }

    // Egyszerű ütközés detektálás
    fun checkCollision(a: GameObject, b: GameObject): Boolean {
        val dist = (a.position - b.position).length()
        return dist < (a.radius + b.radius)
    }

    init {
        // Mozgás logikájának beállítása az avatarhoz
        move = ParachuteMotion(this)
    }
}