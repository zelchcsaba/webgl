import vision.gears.webglmath.*
import kotlin.js.Date
import kotlin.math.*

// Drone osztály, amely egy drónt képvisel
class Drone(val target: GameObject, vararg meshes: Mesh) : GameObject(*meshes) {

    var velocity = Vec3(0.0f, 0.0f, 0.0f)
    var acceleration = Vec3(0.0f, 0.0f, 0.0f)
    var force = Vec3(0.0f, 0.0f, 0.0f)
    val mass = 1.0f
    val invMass = 1.0f / mass
    val c = 1.0f // csillapítási együttható
    val desiredDistance = 0.5f

    // Drone saját mozgás logikája
    inner class DroneMotion(gameObject: GameObject) : Motion(gameObject) {

        override operator fun invoke(
            dt: Float,
            t: Float,
            keysPressed: Set<String>,
            interactors: ArrayList<GameObject>,
            spawn: ArrayList<GameObject>
        ): Boolean {

            // Irány beállítása a cél felé
            val toTarget = target.position - position
            val distance = toTarget.length()

            // Erő alkalmazása a cél felé, ha túl messze van
            if (distance > desiredDistance) {

                val dir = toTarget.normalize()
                force.plusAssign(dir) 

            } else {

                force = Vec3(0.0f, 0.0f, 0.0f) // nincs erő, ha elég közel van

            }

            acceleration = force * invMass
            velocity.plusAssign(acceleration * dt)
            position.plusAssign(velocity * dt)

            
            velocity.timesAssign(exp(-dt * c / mass).toFloat())

            // Forgás beállítása a mozgás irányába
            if (velocity.length() > 0.001f) {
                roll = atan2(velocity.y.toDouble(), velocity.x.toDouble()).toFloat()
            }

            force.set(0.0f, 0.0f, 0.0f) // Erő visszaállítása minden frissítés után

            // Visszaadunk true-t, ha a mozgás sikeresen végrehajtódott
            if(!isDead){
                return true
            }else{
                return false
            }
            
        }
    }

    init {
        // Mozgás logikájának beállítása az avatarhoz
        move = DroneMotion(this)
    }
}