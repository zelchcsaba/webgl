import vision.gears.webglmath.*
import kotlin.js.Date
import kotlin.math.*

// Avatar osztály, amely a játékos karakterét képviseli
class Avatar(val propeller: GameObject, vararg meshes: Mesh) : GameObject(*meshes) {

    var velocity = Vec3(0.0f, 0.0f, 0.0f)
    var acceleration = Vec3(0.0f, 0.0f, 0.0f)
    var force = Vec3(0.0f, 0.0f, 0.0f)
    val mass = 1.0f
    val invMass = 1.0f / mass
    val c = 1.0f
    var timeToNextShoot = 3.0f

    // Avatar saját mozgás logikája
    inner class AvatarMotion(gameObject: GameObject) : Motion(gameObject) {

        override operator fun invoke(
            dt: Float,
            t: Float,
            keysPressed: Set<String>,
            interactors: ArrayList<GameObject>,
            spawn: ArrayList<GameObject>
        ): Boolean {
            // Egyszerű mozgás: WASD

            if ("W" in keysPressed) {
                force.plusAssign(Vec3(0.0f, 1.0f, 0.0f))
            }
            if ("S" in keysPressed) {
                force.plusAssign(Vec3(0.0f, -1.0f, 0.0f))
            }
            if ("A" in keysPressed) {
                force.plusAssign(Vec3(-1.0f, 0.0f, 0.0f))
            }
            if ("D" in keysPressed) {
                force.plusAssign(Vec3(1.0f, 0.0f, 0.0f))
            }

            acceleration = force * invMass

            // Ha az "E" gombot lenyomva tartják, a sebesség konstans lesz
            if("E" in keysPressed){
                if (velocity.length() > 0.0001f) { 
                    velocity = velocity.normalize()
                } else {
                    velocity.set(0.0f, 0.0f, 0.0f) 
                }
            }else{
                velocity.plusAssign(acceleration * dt)
            }

            position.plusAssign(velocity * dt)

            // Egyszerű határok a játéktéren való mozgáshoz
            if(abs(position.x) > 5.0f || abs(position.y)> 5.0f) position = Vec3(0.0f, 0.0f, 0.0f)

            // Propeller pozíciójának és forgásának frissítése
            val forward = Vec3(cos(roll), sin(roll), 0.0f)
            val offset = forward * 0.05f
            propeller.position.set(position + offset)
            propeller.roll += 0.05f

            // Légellenállás szimulációja
            velocity.timesAssign(exp(-dt * c / mass).toFloat())

            // Az avatar irányának frissítése a sebességvektor alapján
            if (velocity.length() > 0.001f) {
                roll = atan2(velocity.y.toDouble(), velocity.x.toDouble()).toFloat()
            }

            // Erő visszaállítása a következő frissítéshez
            force.set(0.0f, 0.0f, 0.0f) 

            timeToNextShoot -= dt

            // Visszaadunk true-t, ha a mozgás sikeresen végrehajtódott
            if(!isDead){
                return true
            }else{
                return false
            }
        }
    }

    // Parachute lövésének logikája
    fun shoot(projectileMesh : Mesh):Parachute? {

        if(timeToNextShoot < 0.0f){

            timeToNextShoot = 3.0f
            val directionCopy = Vec3(velocity.x, velocity.y, velocity.z).normalize()
            val angle = atan2(directionCopy.y.toDouble(), directionCopy.x.toDouble()).toFloat()

            return Parachute(directionCopy, projectileMesh).apply {
                position.set(this@Avatar.position+directionCopy*this@Avatar.radius*2.0f)
                startPosition.set(this@Avatar.position+directionCopy*this@Avatar.radius*2.0f)
                scale.set(0.1f, 0.1f)
                roll = angle
                radius = 0.1f
            }

        }else{

            return null

        }
    }

    // Avatar halálának kezelése
    override fun setIsdead(){
        isDead = true
        propeller.setIsdead()
        console.log("Avatar meghalt")
    }

    init {
        // Mozgás logikájának beállítása az avatarhoz
        move = AvatarMotion(this)
    }
}