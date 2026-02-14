import vision.gears.webglmath.*
import kotlin.math.*

class Flipper(
    vararg meshes: Mesh
) : GameObject(*meshes) {

    var bounceForce = 30f

    inner class FlipperMotion : Motion() {

        override operator fun invoke(
            t: Float,
            dt: Float,
            keysPressed: Set<String>,
            gameObjects: List<GameObject>,
            spawn: List<GameObject>
        ): Boolean {

            for (obj in gameObjects) {
                if (obj is Avatar) {
                    checkCollisionAvatar(obj)
                }else if (obj is Roller) {
                    checkCollisionRoller(obj)
                }
            }

            return true
        }

        private fun checkCollisionAvatar(avatar: Avatar) {
            
            val diff = avatar.position - position
            val distance = diff.length()
            val avatarRadius = avatar.radius 

            // Ütközés detektálás
            if (distance < radius + avatarRadius && distance > 0.01f) {

                // Normalizált ütközési vektor
                val collisionNormal = diff / distance.toFloat()

                // Azonnal kihúzzuk az avatart a flipperből
                val overlap = (radius + avatarRadius) - distance
                avatar.position.plusAssign(collisionNormal * overlap)

                avatar.velocity.plusAssign(collisionNormal * bounceForce)
            }
        }

        private fun checkCollisionRoller(roller: Roller) {
            
            val diff = roller.position - position
            val distance = diff.length()
            val rollerRadius = roller.radius 

            // Ütközés detektálás
            if (distance < radius + rollerRadius && distance > 0.01f) {

                // Normalizált ütközési vektor
                val collisionNormal = diff / distance.toFloat()

                // Azonnal kihúzzuk az avatart a flipperből
                val overlap = (radius + rollerRadius) - distance
                roller.position.plusAssign(collisionNormal * overlap)

                roller.velocity.plusAssign(collisionNormal * bounceForce*3f)
            }
        }

    }


    init {
        move = FlipperMotion()
    }
}