fun main() {

    println("Input en terminal Readline - Registro Escolar")
    println("¿Cómo te llamas?")
    val nombreInicial = readLine()
    println("Bienvenido al sistema de notas del colegio : $nombreInicial")

    println("Inputs en terminal Readline")
    println("¿Nombre del estudiante?")
    val nombre = readLine()
    println("Estudiante registrado : $nombre")
    
    println("Puntos obtenidos en deberes:")
    val puntosDeberes = readLine()!!.toInt()
    
    println("Puntos obtenidos en participacion:")
    // Usamos ?: 0 para que si ingresa algo no numérico, tome 0 por defecto
    val puntosParticipacion = readLine()?.toIntOrNull() ?: 0
    
    val total = puntosDeberes + puntosParticipacion
    println("Total de puntos acumulados: $total")
    
    println("Calculadora de Calificacion")
    println("Nota Inicial:")
    val notaInicial = readLine()!!.toInt()
    println("Nota ingresada: $notaInicial")
}