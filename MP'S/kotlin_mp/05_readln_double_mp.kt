fun main() {
    println("Calculo de Puntaje Academico")
    println("¿Nombre del estudiante?")
    val nombre = readLine()
    println("Cantidad de examenes rendidos:")
    val examenes = readLine()!!.toInt()
    println("Puntaje promedio por examen:")
    val puntajePorExamen = readLine()!!.toDouble()
    println("Puntaje maximo permitido en el parcial:")
    val puntajeMaximo = readLine()!!.toDouble()
    
    val puntajeTotal = examenes * puntajePorExamen
    val puntosDisponibles = puntajeMaximo - puntajeTotal
    
    println("Reporte Academico")
    println("Estudiante: $nombre")
    println("Puntaje total obtenido: $puntajeTotal")
    println("Puntos restantes para el maximo: $puntosDisponibles")
}