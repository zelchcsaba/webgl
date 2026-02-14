import vision.gears.webglmath.*
import kotlin.math.*

class HelicopterCamera(vararg programs: Program) : PerspectiveCamera(*programs) {
    
    var heliVelocity = Vec3(0f, 0f, 0f)
    
    var heliAngularVelocity = Vec3(0f, 0f, 0f)

    val heliMass = 1.0f
    val I = 1.0f
    
    //rugó és csillapító együtthatók
    var kLinear = 80f     
    var cLinear = 15f        
    
    var kAngular = 50f     
    var cAngular = 12f       
    
    //kamera offset az autóhoz képest
    var cameraOffset = Vec3(0f, 5f, -10f) 

    var yawAroundCar = PI.toFloat() 

    // távolság az autótól
    var radius = 10.0f
    
    init {
        isDragging = false
    }
    
    // cél pozíció és orientáció számítása az autó alapján
    private fun calculateTargetTransform(avatar: Avatar): Pair<Vec3, Vec3> {

        val avatarForward = Vec3(sin(avatar.yaw), 0f, cos(avatar.yaw))
        val avatarRight = Vec3(cos(avatar.yaw), 0f, -sin(avatar.yaw))
        val avatarUp = Vec3(0f, 1f, 0f)
        
        // Offset transzformálása az autó koordinátarendszerébe
        val worldOffset = Vec3(
            avatarRight.x * cameraOffset.x + avatarUp.x * cameraOffset.y + avatarForward.x * cameraOffset.z,
            avatarRight.y * cameraOffset.x + avatarUp.y * cameraOffset.y + avatarForward.y * cameraOffset.z,
            avatarRight.z * cameraOffset.x + avatarUp.z * cameraOffset.y + avatarForward.z * cameraOffset.z
        )
        
        val targetPosition = Vec3(
            avatar.position.x + worldOffset.x,
            avatar.position.y + worldOffset.y,
            avatar.position.z + worldOffset.z
        )
        
        // Irányvektor az autó felé
        val dirToAvatar = Vec3(
            avatar.position.x - targetPosition.x,
            avatar.position.y - targetPosition.y,
            avatar.position.z - targetPosition.z
        )
        
        val length = sqrt(dirToAvatar.x * dirToAvatar.x + 
                          dirToAvatar.y * dirToAvatar.y + 
                          dirToAvatar.z * dirToAvatar.z)
        
        if (length > 0.001f) {
            dirToAvatar.x /= length
            dirToAvatar.y /= length
            dirToAvatar.z /= length
        }
        
        // Yaw számítása 
        val targetYaw = atan2(-dirToAvatar.x, -dirToAvatar.z)
        
        // Pitch számítása
        val horizontalDist = sqrt(dirToAvatar.x * dirToAvatar.x + dirToAvatar.z * dirToAvatar.z)
        val targetPitch = atan2(dirToAvatar.y, horizontalDist)
        
        // Roll maradjon 0
        val targetRoll = 0f
        
        return Pair(targetPosition, Vec3(targetPitch, targetYaw, targetRoll))

    }
    
    // frissítés függvény a helikopter fizika szimulációhoz
    fun updateHelicopter(dt: Float, avatar: Avatar) {

        val (targetPos, targetAngles) = calculateTargetTransform(avatar)
        
        // lineáris mozgás szimulációja
        
        // Hooke-törvény: F = k * (célpozíció - jelenlegi pozíció)
        val kiteres = Vec3(
            targetPos.x - position.x,
            targetPos.y - position.y,
            targetPos.z - position.z
        )
        
        val rugoero = Vec3(
            kiteres.x * kLinear,
            kiteres.y * kLinear,
            kiteres.z * kLinear
        )
        
        // Csillapíás: F = -c * sebesség
        val csillapitoero = Vec3(
            -heliVelocity.x * cLinear,
            -heliVelocity.y * cLinear,
            -heliVelocity.z * cLinear
        )
        
        val totalForce = Vec3(
            rugoero.x + csillapitoero.x,
            rugoero.y + csillapitoero.y,
            rugoero.z + csillapitoero.z
        )
        
        // Gyorsulás: a = F / m
        val acceleration = Vec3(
            totalForce.x / heliMass,
            totalForce.y / heliMass,
            totalForce.z / heliMass
        )
        
        // Sebesség és pozíció frissítése
        heliVelocity.x += acceleration.x * dt
        heliVelocity.y += acceleration.y * dt
        heliVelocity.z += acceleration.z * dt
        
        position.x += heliVelocity.x * dt
        position.y += heliVelocity.y * dt
        position.z += heliVelocity.z * dt
        
        
        // szögmozgás szimulációja

        // Szög különbségek
        var pitchDiff = angleDifference(targetAngles.x, pitch)
        var yawDiff = angleDifference(targetAngles.y, yaw)
        var rollDiff = angleDifference(targetAngles.z, roll)
        
        // Rugó nyomatékok: τ = k * szögkülönbség
        val rugonyomatek = Vec3(
            pitchDiff * kAngular,
            yawDiff * kAngular,
            rollDiff * kAngular
        )
        
        // Csillapító nyomatékok: τ = -c * szögsebesség
        val csillapitonyomatek = Vec3(
            -heliAngularVelocity.x * cAngular,
            -heliAngularVelocity.y * cAngular,
            -heliAngularVelocity.z * cAngular
        )
        
        val eredonyomatek = Vec3(
            rugonyomatek.x + csillapitonyomatek.x,
            rugonyomatek.y + csillapitonyomatek.y,
            rugonyomatek.z + csillapitonyomatek.z
        )
        
        // Szöggyorsulás: α = τ / I
        val angularAcceleration = Vec3(
            eredonyomatek.x / I,
            eredonyomatek.y / I,
            eredonyomatek.z / I
        )
        
        // Szögsebesség és szögek frissítése
        heliAngularVelocity.x += angularAcceleration.x * dt
        heliAngularVelocity.y += angularAcceleration.y * dt
        heliAngularVelocity.z += angularAcceleration.z * dt
        
        pitch += heliAngularVelocity.x * dt
        yaw += heliAngularVelocity.y * dt
        roll += heliAngularVelocity.z * dt
        
        pitch = normalizeAngle(pitch)
        yaw = normalizeAngle(yaw)
        roll = normalizeAngle(roll)
        
        // Kamera mátrixok frissítése
        update()
    }
    
    // Legrövidebb szögkülönbség számítása
    private fun angleDifference(target: Float, current: Float): Float {

        var diff = target - current

        while (diff > PI) diff -= 2f * PI.toFloat()
        while (diff < -PI) diff += 2f * PI.toFloat()
        return diff

    }
    
    // Szög normalizálása [-PI, PI] tartományba
    private fun normalizeAngle(angle: Float): Float {

        var normalized = angle
        while (normalized > PI) normalized -= 2f * PI.toFloat()
        while (normalized < -PI) normalized += 2f * PI.toFloat()
        return normalized

    }
    
    
    // kezdeti pozíció és orientáció beállítása az autó alapján
    fun initialize(avatar: Avatar) {

        val (targetPos, targetAngles) = calculateTargetTransform(avatar)
        position.set(targetPos.x, targetPos.y, targetPos.z)
        pitch = targetAngles.x
        yaw = targetAngles.y
        roll = targetAngles.z
        
        update()

    }
        
    // kamera mozgatása a billentyűzet bemenet alapján
    override fun move(dt: Float, keysPressed: Set<String>) {
        if("C" in keysPressed) { 
            cameraOffset.y +=  (speed * dt) 
        } 
        if("X" in keysPressed) { 
            cameraOffset.y -=  (speed * dt)
        } 

        if("Q" in keysPressed) { 
            yawAroundCar -= speed * dt *0.05f

            val rotatedOffset = Vec3(
                (radius * sin(yawAroundCar)).toFloat(),
                cameraOffset.y,
                (radius * cos(yawAroundCar)).toFloat()
            )

            cameraOffset = rotatedOffset
 
        } 
        if("E" in keysPressed) { 
            yawAroundCar += speed * dt*0.05f
            
            val rotatedOffset = Vec3(
                (radius * sin(yawAroundCar)).toFloat(),
                cameraOffset.y,
                (radius * cos(yawAroundCar)).toFloat()
            )

            cameraOffset = rotatedOffset
        } 

    } 
}