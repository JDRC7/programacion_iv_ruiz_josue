
fun main() {

    println("===== SISTEMA DE NOTAS ESCOLARES =====")

    // Ciclo for: recorrer preguntas de un examen
    for (i in 1..5) {
        println("El estudiante Roberto Rocha responde la pregunta $i")
    }

    // Ciclo for: cuenta regresiva de turnos de atención
    println("\n===== TURNOS DE ATENCIÓN =====")

    for (i in 10 downTo 5) {
        println("Quedan $i estudiantes por atender")
    }

    // Ciclo for con step: recorrer números impares
    println("\n===== REGISTRO DE ESTUDIANTES =====")

    for (i in 1..20 step 2) {
        println("Registrando al estudiante número $i")
    }

    // Ciclo for: cálculo de puntos obtenidos
    println("\n===== CÁLCULO DE CALIFICACIONES =====")

    for (i in 1..10) {
        val resultado = 5 * i

        println("Examen $i x 5 puntos = $resultado puntos")
        println("Calificación del examen $i: ${i * 5} puntos")
    }
}
