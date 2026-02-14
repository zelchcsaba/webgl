import vision.gears.webglmath.*
import kotlin.js.Date
import kotlin.math.*

// Cannon osztály, amely egy ágyút képvisel
class Cannon(val target: GameObject, vararg meshes: Mesh) : GameObject(*meshes) {

    // Cannon saját mozgás logikája
    inner class CannonMotion(gameObject: GameObject) : Motion(gameObject) {

        override operator fun invoke(
            dt: Float,
            t: Float,
            keysPressed: Set<String>,
            interactors: ArrayList<GameObject>,
            spawn: ArrayList<GameObject>
        ): Boolean {

            // Irány beállítása a cél felé
            val toTarget = target.position - position
            val angle = atan2(toTarget.y.toDouble(), toTarget.x.toDouble()).toFloat()
            roll = angle

            // Visszaadunk true-t, ha a mozgás sikeresen végrehajtódott
            if(!isDead){
                return true
            }else{
                return false
            }
        }
    }

    // Lövés logikája
    fun shoot(projectileMesh : Mesh):Projectile? {

            val offsetDistance = this@Cannon.radius*1.5f 
            val newPosition = Vec3(
                position.x + cos(this@Cannon.roll) * offsetDistance,
                position.y + sin(this@Cannon.roll) * offsetDistance,
                position.z 
            )

            val direction  = (target.position - position).normalize()

            return Projectile(direction, projectileMesh).apply {
                position.set(newPosition)
                startPosition.set(newPosition)
                scale.set(0.1f, 0.1f)
                roll = this@Cannon.roll
                radius = 0.1f
                
            }
    }

    init {
        // Mozgás logikájának beállítása az avatarhoz
        move = CannonMotion(this)
    }
}