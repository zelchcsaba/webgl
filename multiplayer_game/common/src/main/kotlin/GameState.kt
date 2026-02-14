import org.khronos.webgl.Float32Array
import org.khronos.webgl.Uint32Array
import vision.gears.webglmath.Vec1
import vision.gears.webglmath.Vec2
import vision.gears.webglmath.Mat4
import kotlin.math.exp
import kotlin.math.sin
import kotlin.math.cos
import kotlinx.serialization.*
import kotlinx.serialization.json.*

@Serializable
class NetObject (
  val playerId : Int,
  val meshName : String,
  var label : String? = null
  ) {

  val position = Vec2(128.0f, 128.0f + playerId.toFloat() * 2.2f)
  var roll = Vec1.makeRandom(-3.14f, +3.14f).x

  val velocity = Vec2.makeRandom(-0.1f, +0.1f)
  var angVelocity = Vec1.makeRandom(-0.314f, +0.314f).x

  var aheadThrust = 0.0f
  var backThrust = 0.0f  
  var rightThrust = 0.0f
  var leftThrust = 0.0f    
  var ccwTorque = 0.0f
  var cwTorque = 0.0f

  var collisionRadius = 1.0f

  var cooldown = 1f


  var lifetime = -1f
  var armedTime = -1f
  var armed = false

  // LABTODO: cooldown
  // iMSc TODO: removal timer

  fun update(dt : Float, t : Float) : Boolean{
    val ahead = Vec2(cos(roll), sin(roll))
    val right = Vec2(ahead.y, -ahead.x)

    velocity += (
      ahead * (aheadThrust - backThrust) +
      right * (rightThrust - leftThrust) ) * dt

    position += velocity * dt

    angVelocity += -cwTorque * dt + ccwTorque * dt

    roll += angVelocity * dt

    velocity *= exp(-dt)
    angVelocity *= exp(-dt)

    cooldown -= dt

    if(armed == false) {
      if(armedTime <= 0f && armedTime != -1f){
        armed = true
      }else if(armedTime > 0f){
        armedTime -= dt
      }
    }

    if (lifetime > 0f)
      lifetime -= dt

    return (lifetime > 0f) || (lifetime == -1f)

    //LABTODO: Euler for velocity
    //LABTODO: exponential energy loss

    // LABTODO: cooldown
    // iMSc TODO: adjust removal timer, remove when expired

  }
}

@Serializable
class GameState () {

  val perPlayerObjectCounts = 
    HashMap<Int, Int>()
  var objects = 
    HashMap<Int, NetObject>()

  class GridEntry(val x:Int, val y:Int, val id:Int) : Comparable<GridEntry>{ 
      override fun compareTo(other : GridEntry) : Int{ 
        if(x - other.x != 0) return x - other.x 
        if(y - other.y != 0) return y - other.y 
        return id - other.id 
      } 
    } 

  fun addObject(playerId : Int, meshName : String, label : String? = null) : NetObject {
    val netObj = NetObject(playerId, meshName, label)
    val perPlayerObjectId = perPlayerObjectCounts[playerId]?:0
    perPlayerObjectCounts[playerId] = perPlayerObjectId + 1
    val netObjectId = perPlayerObjectId * 256 + playerId
    objects[netObjectId] = netObj
    return netObj
  }

  fun dropPlayer(playerId : Int){
    // remove objects with a certain player id
    objects = HashMap(objects.filterValues {
      netObj -> netObj.playerId != playerId
    })
  }

  fun update(dt : Float, t : Float) {
    //objects.forEach{ (_ : Int, netObj : NetObject) -> netObj.update(dt, t)}
    objects = HashMap(objects.filterValues{ it.update(dt, t) })

    //LABTODO: collision
    val iObject = objects.iterator() 
    if(!iObject.hasNext()) {return} 
    var entry = iObject.next() 
    val linearGrid = Array<GridEntry>(objects.size*4) { 
      i -> 
      val netObj = entry.value 
      val index = entry.key 
      if(i%4 == 3 && iObject.hasNext()) { 
        entry = iObject.next() 
      } 
      GridEntry( 
        netObj.position.x.toInt()/2 - i%2, 
        netObj.position.y.toInt()/2 - (i%4)/2, 
        index 
      ) 
    }

    linearGrid.sort() 
    val candidates = HashSet<Pair<Int, Int>>() 
    var j = 0 
    while(j < linearGrid.size ) { 
      var k = j+1 
      while( k < linearGrid.size && 
          linearGrid[k].x == linearGrid[j].x && 
          linearGrid[k].y == linearGrid[j].y) { 
        candidates.add( Pair(linearGrid[j].id, linearGrid[k].id ) ) 
        k++ 
      } 
      j++ 
    } 

// előszűrés: csak a mine objektumokra
val mines = objects.values.filter { it.meshName == "mine" }

// minden mine-re nézd a célpontokat
mines.forEach { mine ->
    objects.values.forEach { target ->
        if(target.meshName == "fighter" && mine.armed) {
            val diff = target.position - mine.position
            val distance2 = diff.dot(diff)
            if(distance2 < 16.0f) { // 4 egység távolság → 4^2 = 16
                val direction = diff.normalize()
                mine.velocity += direction * dt
            }
        }
    }
}

    candidates.forEach { 
      val i = objects[it.first] ?: return@forEach 
      val j = objects[it.second] ?: return@forEach
      if(i.meshName == "mine" && !i.armed) return@forEach
      if(j.meshName == "mine" && !j.armed) return@forEach

      if (i.meshName == "boom" || j.meshName == "boom") return@forEach

      val diff = i.position - j.position 
      if( diff.dot(diff) < i.collisionRadius + j.collisionRadius) { 
        val collisionNormal = diff.normalize()
        i.position += collisionNormal * 0.01f
        j.position -= collisionNormal * 0.01f
        val relativeVelocity = i.velocity - j.velocity
        val relVelAlongNormal = relativeVelocity.dot(collisionNormal)
        if(relVelAlongNormal < 0.0f) {
          if(i.meshName != "fighter" || j.meshName != "fighter") {
            val midpoint = (i.position + j.position) * 0.5f
            addObject(-1, "boom").apply{
              position.set(midpoint)
              lifetime = 1.3f
            }
          }

          if(i.meshName == "mine"){

            val impulseMagnitude = 10f
            val impulseVector = collisionNormal * impulseMagnitude
            j.velocity -= impulseVector

          }else if(j.meshName == "mine"){

            val impulseMagnitude = 10f
            val impulseVector = collisionNormal * impulseMagnitude
            i.velocity += impulseVector

          }else{

            val e = 0.2f // rugalmassági együttható
            val impulse = -(1 + e) * relVelAlongNormal

            val impulseVector = collisionNormal * impulse
            i.velocity += impulseVector 
            j.velocity -= impulseVector

          }

          if (i.meshName == "orb" || i.meshName == "mine") i.lifetime = 0f
          if (j.meshName == "orb" || j.meshName == "mine") j.lifetime = 0f

        }

      }
    } 
  }

  fun onKeyDown(playerId : Int, key : String) {
    val obj = objects[playerId] ?: return
    if(key == "W"){
      obj.aheadThrust = 5.0f
    }
    if(key == "S"){
      obj.backThrust = 5.0f
    }
    if(key == "A"){
      obj.leftThrust = 2.0f
    }
    if(key == "D"){
      obj.rightThrust = 2.0f
    }    
    if(key == "Q"){
      obj.ccwTorque = 2.0f
    }
    if(key == "E"){
      obj.cwTorque = 2.0f
    }
    if(key == "SPACE") {
      objects[playerId]?.let{ avatar ->
        if(avatar.cooldown < 0.0f) {
          val ahead = Vec2(cos(avatar.roll), sin(avatar.roll))
          addObject(playerId, "orb").apply{
            position.set(avatar.position + ahead)
            velocity.set(ahead * 15f)
            lifetime = 10.0f
          }
          avatar.cooldown = 1.0f
          //cooldown-t a NetObjectbe vegyük fel, és folyamatosan csökkentsük
        }
      }
    }

    if(key == "M") {
      objects[playerId]?.let{ avatar ->
        if(avatar.cooldown < 0.0f) {
          val ahead = Vec2(cos(avatar.roll), sin(avatar.roll))
          addObject(playerId, "mine").apply{
            position.set(avatar.position - ahead*2f)
            velocity.set(0f, 0f)
            armedTime = 3.0f
            collisionRadius = 1.0f
          }
          avatar.cooldown = 1.0f
          //cooldown-t a NetObjectbe vegyük fel, és folyamatosan csökkentsük
        }
      }
    }

  }

  fun onKeyUp(playerId : Int, key : String) {
    val obj = objects[playerId] ?: return
    if(key == "W"){
      obj.aheadThrust = 0.0f
    }
    if(key == "S"){
      obj.backThrust = 0.0f
    }
    if(key == "A"){
      obj.leftThrust = 0.0f
    }
    if(key == "D"){
      obj.rightThrust = 0.0f
    }    
    if(key == "Q"){
      obj.ccwTorque = 0.0f
    }
    if(key == "E"){
      obj.cwTorque = 0.0f
    }
  }  

  fun applyServerState(serverState : GameState){
    objects = serverState.objects
  }

}