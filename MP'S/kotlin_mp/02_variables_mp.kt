const val NOTA_MAXIMA = 10

fun main() {
    var notaActual = 10
    println(notaActual)
    println("Autor: Josue Ruiz")
    notaActual = 8
    println("Nota Actual")
    println(notaActual)
    println("Tipos de Variables de Kotlin")
    
    println("Tipo Integer o Entero")
    var edadEstudiante: Int = 15
    var materiasInscritas: Int = 10
    println("Edad del estudiante: $edadEstudiante")
    println("Materias inscritas: $materiasInscritas")
    
    println("Tipo Long")
    var codigoMatricula: Long = 202600014589
    println("Codigo de matricula: $codigoMatricula")
    
    println("Tipo Float")
    var notaExamen: Float = 8.75F
    println("Nota de examen: $notaExamen")
    
    println("Tipo Double")
    var promedioExacto: Double = 8.857142857142858
    println("Promedio exacto: $promedioExacto")
    
    println("Tipo Char")
    var paralelo: Char = 'A'
    println("Paralelo: $paralelo")
    
    println("Tipo String")
    var estudiante: String = "Carlos Mendoza"
    var curso: String = "Tercero de Bachillerato"
    println("Estudiante: $estudiante, Curso: $curso")
    
    println("Tipo Boolean")
    var matriculado: Boolean = true
    println("Matriculado: $matriculado")

    println("VAL CONST VAR")
    val rector = "Lic. Jorge Villacis"
    var cuposDisponibles = 5
    println("Nombre del rector: $rector")
    println("Cupos disponibles: $cuposDisponibles")
    println("Constante Nota Maxima: $NOTA_MAXIMA")
}