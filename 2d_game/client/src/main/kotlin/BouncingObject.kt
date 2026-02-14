import vision.gears.webglmath.*
import kotlin.math.*

// BouncingObject osztály, amely egy ütköző objektumot képvisel
class BouncingObject(vararg meshes:Mesh) : GameObject(*meshes){

    var velocity = Vec3(0.0f, 0.0f, 0.0f)
    val mass = 3.0f
    val c = 5.0f

    // BouncingObject saját mozgás logikája
    inner class BouncingObjectMotion(gameObject: GameObject): Motion(gameObject){

        override operator fun invoke(
            dt: Float,
            t: Float,
            keysPressed: Set<String>,
            interactors: ArrayList<GameObject>,
            spawn: ArrayList<GameObject>
        ): Boolean {

            position.plusAssign(velocity * dt)

            // Ütközés detektálása és kezelése az avatarokkal
            for (other in interactors) {

                if (other is Avatar && other !== this@BouncingObject && !other.isDead) {

                    if (checkCollision(this@BouncingObject, other)) {
                        
                        val delta = position - other.position
                        val distance = delta.length()
                        if (distance < 0.001f) continue
                        val normal = delta / distance
                        
                        // Sebességek a normál mentén
                        val v1n = velocity.dot(normal)
                        val v2n = other.velocity.dot(normal)
                        
                        // Relatív sebesség ellenőrzése
                        if (v1n - v2n >= 0) continue 
                        
                        // Rugalmas ütközés képletei
                        val v1n_new = ((mass - other.mass) * v1n + 2.0f * other.mass * v2n) / (mass + other.mass)
                        val v2n_new = ((other.mass - mass) * v2n + 2.0f * mass * v1n) / (mass + other.mass)
                        
                        velocity.plusAssign(normal * (v1n_new - v1n))
                        other.velocity.plusAssign(normal * (v2n_new - v2n))

                    }
                }
            }

            velocity.timesAssign(exp(-dt * c / mass).toFloat())

            if(!isDead){
                return true
            }else{
                return false
            }
            
        }   
    
    }

    // Egyszerű ütközés ellenőrzés két objektum között
    fun checkCollision(a: GameObject, b: GameObject): Boolean {
        val dist = (a.position - b.position).length()
        return dist < (a.radius + b.radius)
    }

    init {
        // Mozgás logikájának beállítása az avatarhoz
        move = BouncingObjectMotion(this)
    }
}