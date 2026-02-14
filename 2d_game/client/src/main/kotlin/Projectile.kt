import vision.gears.webglmath.*
import kotlin.math.*

// Projectile osztály, amely egy lövedéket képvisel
class Projectile(val direction : Vec3, vararg meshes:Mesh) : GameObject(*meshes){
    val velocity = direction
    val maxDistance = 5.0f
    val startPosition = Vec3()

    // Projectile saját mozgás logikája
    inner class ProjectileMotion(gameObject: GameObject): Motion(gameObject){

        override operator fun invoke(
            dt: Float,
            t: Float,
            keysPressed: Set<String>,
            interactors: ArrayList<GameObject>,
            spawn: ArrayList<GameObject>
        ): Boolean {

            position.plusAssign(velocity * dt)

            // Ellenőrizzük, hogy elérte-e a maximális távolságot
            if((position - startPosition).length() > maxDistance){
                return false
            }

            // Ütközés detektálása és kezelése az avatarokkal
            for (other in interactors) {
                if (other is Avatar && !other.isDead) {
                    if (checkCollision(this@Projectile, other)) {
                        this@Projectile.isDead = true
                        other.setIsdead()
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
        move = ProjectileMotion(this)
    }
}