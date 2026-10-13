fun main() {
    println("Condicional If - Evaluacion de Notas")
    println("Condicional Simple o un camino")
    var notaFinal = 8.0 // Cambiado a 'var' para permitir reasignación de valor
    if (notaFinal >= 7.0) {
        println("El estudiante aprueba la materia")
    } else {
        println("Nota insuficiente para aprobar")
    }

    println("Condicional multiple")
    notaFinal = 7.5
    if (notaFinal >= 9.0) {
        println("El estudiante aprueba con excelencia")
    } else if (notaFinal >= 7.0) {
        println("Nota suficiente para aprobar")
    } else {
        println("Nota insuficiente, va a supletorio")
    }

    println("Condicional anidado")
    notaFinal = 8.5
    val asistenciaMinima = true
    if (notaFinal >= 7.0) {
        println("Nota suficiente")
        if (asistenciaMinima) {
            println("Puede ser promovido al siguiente curso")
        }
    } else {
        println("Nota insuficiente")
    }
}