import vision.gears.webglmath.*
import kotlin.math.*

class Roller(
    vararg meshes: Mesh
) : GameObject(*meshes) {

    // Fizikai tulajdonságok
    var velocity = Vec3(0f, 0f, 0f)
    val mass = 30.0f
    val invMass = 1.0f / mass

    val c = 10.0f
    
    private var totalRotationX = 0f
    
    init {
        move = RollerMotion()
    }

    inner class RollerMotion : Motion() {
        override operator fun invoke(
            t: Float,
            dt: Float,
            keysPressed: Set<String>,
            gameObjects: List<GameObject>,
            spawn: List<GameObject>
        ): Boolean {

            // Ütközés ellenőrzés avatarral
            for (obj in gameObjects) {
                if (obj is Avatar) {
                    checkCollisionWithAvatar(obj, dt)
                }else if (obj is Roller) {
                    checkCollisionWithRoller(obj, dt)
                }
            }

            // Sebesség csillapítás
            velocity.x *= exp(-dt * c / mass).toFloat()
            velocity.z *= exp(-dt * c / mass).toFloat()
            velocity.y = 0f

            // Pozíció frissítés
            position.plusAssign(velocity * dt)

            // Maradjon a talajon
            position.y = -1f

            if (velocity.length() > 0.01f) {

                // Megtett távolság
                val distanceMoved = velocity.length() * dt
                
                // Forgási szög
                val rotationAngle = distanceMoved / radius
                
                yaw = atan2(velocity.x, velocity.z)
                
                totalRotationX += rotationAngle
                pitch = totalRotationX
                
                // Roll-t nullázzuk
                roll = 0f

            }

            return true
        }

        private fun checkCollisionWithAvatar(avatar: Avatar, dt: Float) {

            val diff = position - avatar.position
            val distance = diff.length()

            val avatarRadius = avatar.radius

            // Ütközés detektálás
            if (distance < radius + avatarRadius && distance > 0.01f) {

                // Normalizált ütközési vektor
                val collisionNormal = diff / distance

                // Átfedés mértéke
                val overlap = (radius + avatarRadius) - distance

                // Pozíció korrekció
                position.plusAssign(collisionNormal * overlap)

                // Relatív sebesség számítása
                val relativeVelocity = (avatar.velocity - velocity).dot(collisionNormal)

                // Ha közelednek egymáshoz
                if (relativeVelocity > 0) {

                    // Rugalmas ütközés
                    val restitution = 0.8f
                    
                    val impulse = (1 + restitution) * relativeVelocity / (invMass + avatar.invMass)
                    val impulseVector = collisionNormal * impulse
                    
                    // Avatar lassul
                    avatar.velocity.minusAssign(impulseVector * avatar.invMass)
                    
                    // Roller gyorsul
                    velocity.plusAssign(impulseVector * invMass)
                }
            }
        }

        private fun checkCollisionWithRoller(roller: Roller, dt: Float) {

            val diff = position - roller.position
            val distance = diff.length()

            val rollerRadius = roller.radius

            // Ütközés detektálás
            if (distance < radius + rollerRadius && distance > 0.01f) {

                // Normalizált ütközési vektor
                val collisionNormal = diff / distance

                // Átfedés mértéke
                val overlap = (radius + rollerRadius) - distance

                // Pozíció korrekció
                position.plusAssign(collisionNormal * overlap)

                // Relatív sebesség számítása
                val relativeVelocity = (roller.velocity - velocity).dot(collisionNormal)

                // Ha közelednek egymáshoz
                if (relativeVelocity > 0) {

                    // Rugalmas ütközés
                    val restitution = 0.8f
                    
                    val impulse = (1 + restitution) * relativeVelocity / (invMass + roller.invMass)
                    val impulseVector = collisionNormal * impulse
                    
                    // Roller lassul
                    roller.velocity.minusAssign(impulseVector * roller.invMass)
                    
                    // Ez a oller gyorsul
                    velocity.plusAssign(impulseVector * invMass)
                }
            }
        }
    }
}