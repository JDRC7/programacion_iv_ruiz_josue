fun main() {
    println("Condicional If")
    println("Condicional Simple o un camino")
    var energia = 80 // Cambiado a 'var' para permitir reasignación de valor
    if (energia >= 50) {
        println("Rick puede abrir el portal")
    } else {
        println("Energia insuficiente")
    }

    println("Condicional multiple") // Corregido printl -> println
    energia = 70
    if (energia >= 100) {
        println("Rick puede abrir el portal") // Corregido printl -> println
    } else if (energia >= 50) {
        println("Energia suficiente") // Corregido printl -> println
    } else {
        println("Energia insuficiente")
    }

    println("Condicional anidado")
    energia = 70
    val motorActivo = true
    if (energia >= 100) {
        println("Energia suficiente")
        if (motorActivo) {
            println("Puede despegar")
        }
    } else {
        println("Energia insuficiente") // Corregido texto de la respuesta else
    }
}