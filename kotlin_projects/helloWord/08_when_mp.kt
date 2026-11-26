
fun main() {

    println("===== SISTEMA DE NOTAS ESCOLARES =====")

    // Selección de materia
    val materiaElegida = 2

    when (materiaElegida) {
        1 -> println("Roberto Rocha está inscrito en: Matemáticas")
        2 -> println("Roberto Rocha está inscrito en: Ciencias Naturales")
        3 -> println("Roberto Rocha está inscrito en: Lengua y Literatura")
        else -> println("Materia no disponible")
    }

    // Días de atención en secretaría
    println("\nIncluye el día (1-7)")
    val dia = readLine()!!.toInt()

    when (dia) {
        1, 2, 3, 4, 5 -> println("Día de atención en secretaría del colegio")
        6, 7 -> println("Secretaría del colegio cerrada")
        else -> println("Día inválido")
    }

    // Clasificación de notas
    println("\nIngrese la nota del examen (entera, de 0 a 10)")
    val nota = readLine()!!.toInt()

    when (nota) {
        in 0..6 -> println("Nota baja: estudiante reprobado")
        in 7..8 -> println("Nota media: estudiante aprobado")
        in 9..10 -> println("Nota alta: excelente rendimiento")
        else -> println("Nota inválida")
    }

    // Control de matrícula escolar
    val saldo = 80.0
    val documentosCompletos = true
    val costoMatricula = 40.0

    /*
    Trabajo con condicionales y comentarios
    utilizando when para el sistema escolar
    */

    when {
        saldo >= costoMatricula && documentosCompletos -> {
            val restante = saldo - costoMatricula

            println("\nMatrícula autorizada para Roberto Rocha")
            println("Saldo restante: $restante USD")
        }

        saldo < costoMatricula && documentosCompletos -> {
            println("\nSaldo insuficiente para realizar la matrícula")
        }

        !documentosCompletos -> {
            println("\nFaltan documentos para completar la matrícula")
        }
    }
}
