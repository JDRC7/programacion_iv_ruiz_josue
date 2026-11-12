fun activarPortal(){
    println("Activando portal interdimensional")
    println("Conteo regresivo")
    println("3")
    println("2")
    println("1")
    println("Francisco Higuera activó el Portal")
}

fun viajar(dimension: String, viajes: Int, consumo: Int){
    println("Viajando a $dimension")
    val total=viajes*consumo
    println("consumo total : $total")
}

fun calcularPrecio(precio: Double): Double{
    var descuento: Double=0.0
    if (precio>=100){
        descuento= precio *0.15
    }
    return descuento
}

fun main(){
    activarPortal()
    activarPortal()
    viajar("Tierra", 5,4)
    viajar("Marte",4,7)
    val descuentoCliente = calcularPrecio(123.5)
    println("El cliente Josue tiene este descuento : $descuentoCliente")
}