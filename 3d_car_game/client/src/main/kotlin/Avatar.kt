import vision.gears.webglmath.*
import kotlin.math.*

class Avatar(val wheels: Array<GameObject>, vararg meshes: Mesh) : GameObject(*meshes) {

    //fizika változók
    var velocity = Vec3(0f, 0f, 0f)
    var acceleration = Vec3(0f, 0f, 0f)
    var force = Vec3(0f, 0f, 0f)
    var forward = Vec3(0f,0f,1f)
    var right = Vec3(1f,0f,0f)
    
    val mass = 100.0f
    val invMass = 1.0f / mass

    val c = 50.0f 
    
    // Vezetéshez szükséges változók
    val maxEngineForce = 5000f      
    val maxBrakeForce = 8000f       
    val friction = 0.98f           

    val maxSteerAngle = (PI/6.0f).toFloat()      
    val wheelBase = 15f           
    
    inner class AvatarMotion : Motion() {

        override operator fun invoke(
            t: Float,
            dt: Float,
            keysPressed: Set<String>,
            gameObjects: List<GameObject>,
            spawn: List<GameObject>
        ): Boolean {

            var engineForce = 0f
            var brakingForce = 0f

            // Gáz és fék
            if ("W" in keysPressed) {
                engineForce = maxEngineForce
            }
            if ("S" in keysPressed) {
                engineForce = -maxEngineForce * 0.5f 
            }


            var steerAngle = 0f

            // Kormányzás
            if ("A" in keysPressed) {
                steerAngle = maxSteerAngle
            }
            if ("D" in keysPressed) {
                steerAngle = -maxSteerAngle
            }

            // irányvektorok frissítése
            forward = Vec3(sin(yaw), 0f, cos(yaw))
            right = Vec3(cos(yaw), 0f, -sin(yaw))

            // sebesség komponensek 
            val localSpeedForward = velocity.x * forward.x + velocity.z * forward.z
            val localSpeedRight = velocity.x * right.x + velocity.z * right.z

            // sebesség frissítése
            var newSpeedForward = localSpeedForward + (engineForce * invMass * dt)
            var newSpeedRight = localSpeedRight * friction

            // légellenállás
            newSpeedForward *= exp(-dt * c / mass).toFloat()
            newSpeedRight *= exp(-dt * c / mass).toFloat()

            velocity.x = newSpeedForward * forward.x + newSpeedRight * right.x
            velocity.z = newSpeedForward * forward.z + newSpeedRight * right.z
            velocity.y = 0f

            // forgás frissítése
            if (abs(newSpeedForward) > 0.01f) {
                val yawRate = newSpeedForward * tan(steerAngle) / wheelBase
                yaw += yawRate * dt
            }

            position.plusAssign(velocity * dt)
            
            // talajon tartás
            position.y = 0f

            force.set(0f, 0f, 0f)

            // kerekek pozíciójának és elfordulásának frissítése
            val wheel1 = wheels[0]
            val wheel2 = wheels[1]
            val wheel3 = wheels[2]
            val wheel4 = wheels[3]

            // Elülső kerekek pozíciója
            wheel1.position.set(position + forward * 14f - right * 6.5f + Vec3(0f, -3f, 0f)) 
            wheel2.position.set(position + forward * 14f + right * 6.5f + Vec3(0f, -3f, 0f))

            // Hátsó kerekek pozíciója
            wheel3.position.set(position - forward * 11f - right * 6.5f + Vec3(0f, -3f, 0f))
            wheel4.position.set(position - forward * 11f + right * 6.5f + Vec3(0f, -3f, 0f))

            // Elsülső kerekek elfordulása 
            wheel1.yaw = yaw + steerAngle
            wheel2.yaw = yaw + steerAngle

            // Hátsó kerekek elfordulása
            wheel3.yaw = yaw
            wheel4.yaw = yaw

            // Kerekek forgása
            wheel1.pitch += (newSpeedForward / (5f)) * dt 
            wheel2.pitch += (newSpeedForward / (5f)) * dt
            wheel3.pitch += (newSpeedForward / (5f)) * dt
            wheel4.pitch += (newSpeedForward / (5f)) * dt

            return true
        }
    }

    init {
        move = AvatarMotion()
    }
}