
data class Solicitud(
    val nota: Double,
    val documentosCompletos: Boolean
)

data class Estudiante(
    val nombre: String,
    val nota: Double
)

data class Matricula(
    val estudiante: String,
    val nota: Double,
    val pagoRealizado: Boolean,
    val documentosCompletos: Boolean
)

fun main() {

    println("===== SISTEMA DE NOTAS ESCOLARES =====")

    // Condicional con AND
    val solicitud = Solicitud(8.0, true)

    if (solicitud.nota >= 7.0 && solicitud.documentosCompletos) {
        println("Roberto Rocha puede matricularse")
    }

    // Arreglo de notas de exámenes
    println("\n===== NOTAS DE EXÁMENES =====")

    val examenes = arrayOf(6.0, 7.5, 9.0, 8.0, 6.5)

    if (examenes[2] >= 8.5) {
        println("¡Excelente! Nota alta en el examen")
    } else {
        println("Nota moderada en el examen")
    }

    // Cálculo del promedio
    println("\n===== PROMEDIO ACADÉMICO =====")

    val pruebas = arrayOf(8.0, 6.5, 9.0)

    val suma = pruebas[0] + pruebas[1] + pruebas[2]
    val promedio = suma / 3.0

    println("Promedio de Christian Cañar: $promedio")

    if (promedio >= 7.0) {
        println("Estudiante aprobado")
    } else {
        println("Estudiante reprobado")
    }

    // Clasificación del rendimiento académico
    println("\n===== RENDIMIENTO ACADÉMICO =====")

    val estudiante = Estudiante("Hernán Varas", 7.5)

    if (estudiante.nota >= 9.0) {
        println("Desempeño excelente")
    } else if (estudiante.nota >= 7.0) {
        println("Desempeño bueno")
    } else if (estudiante.nota >= 5.0) {
        println("Desempeño regular")
    } else {
        println("Rendimiento académico crítico")
    }

    // Control de matrícula escolar
    println("\n===== MATRÍCULA ESCOLAR =====")

    val matricula = Matricula(
        "Eduardo Pérez",
        8.5,
        false,
        true
    )

    if (matricula.nota >= 7.0) {

        if (matricula.pagoRealizado && matricula.documentosCompletos) {
            println("Matrícula autorizada")

        } else if (!matricula.pagoRealizado) {
            println("${matricula.estudiante} no ha realizado el pago")

        } else {
            println("Faltan documentos de ${matricula.estudiante}")
        }

    } else {
        println("Nota insuficiente para matricularse")
    }
}
