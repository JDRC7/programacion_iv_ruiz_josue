
data class EstudianteNota(
    val nombre: String,
    val nota: Double // sobre 10
)

fun main() {

    var presupuestoTotal = 0.0

    println("===== PRESUPUESTO DE NIVELACIÓN ESCOLAR =====")
    println("Presupuesto de nivelación de Roberto Rocha")

    for (curso in 1..6) {

        val costoOriginal = curso * 25.0
        var descuento = 0.0

        if (costoOriginal >= 100.0) {
            descuento = costoOriginal * 0.20
        }

        val costoFinal = costoOriginal - descuento
        presupuestoTotal += costoFinal

        println("\nCurso $curso")
        println("Costo original: $costoOriginal USD")
        println("Descuento aplicado: $descuento USD")
        println("Costo final: $costoFinal USD")
    }

    println(
        "\nPresupuesto total de nivelación: %.2f USD"
            .format(presupuestoTotal)
    )

    // Registro de estudiantes y sus calificaciones
    println("\n===== REGISTRO DE NOTAS ESCOLARES =====")

    val estudiantes = arrayOf(
        EstudianteNota("Camila Andrade", 9.5),
        EstudianteNota("Valeria Morocho", 8.5),
        EstudianteNota("Roberto Rocha", 8.0),
        EstudianteNota("Josué Ruiz", 6.5),
        EstudianteNota("Carlos Baños", 4.5),
        EstudianteNota("Mateo Pazmiño", 6.0)
    )

    val notaMinima = 7.0

    for (estudiante in estudiantes) {

        println("\nEstudiante: ${estudiante.nombre}")
        println("Nota: ${estudiante.nota} / 10")

        when {
            estudiante.nota < 5.0 -> {
                println("Estado: REPROBADO")
                println("Debe realizar un curso de recuperación")
            }

            estudiante.nota < 7.0 -> {
                println("Estado: SUPLETORIO")
                println("Debe mejorar su calificación")
            }

            estudiante.nota < 9.0 -> {
                println("Estado: APROBADO")
            }

            else -> {
                println("Estado: EXCELENCIA ACADÉMICA")
                println("Puede obtener una beca de excelencia")
            }
        }

        if (estudiante.nota >= notaMinima) {

            val sobreElMinimo = estudiante.nota - notaMinima

            println("Matrícula autorizada")
            println("Puntos sobre el mínimo: $sobreElMinimo")

        }
    }
}
