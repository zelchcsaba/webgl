import vision.gears.webglmath.*
import kotlin.math.*

// Building osztály, amely egy épületet képvisel
class Building(vararg meshes:Mesh) : GameObject(*meshes){
    
    var isSafe = false
    
    init {
        scale.set(0.2f, 0.2f)
        radius = 0.2f
    }
}