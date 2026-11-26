
fun main() {

    println("Condicional If")
    println("Condicional Simple o un camino")

    var nota = 8.5 // Nota sobre 10

    if (nota >= 7.0) {
        println("Roberto Rocha ha aprobado la materia")
    }

    println("Condicional if-else o dos caminos")

    nota = 5.5

    if (nota >= 7.0) {
        println("Roberto Rocha ha aprobado la materia")
    } else {
        println("Roberto Rocha ha reprobado la materia")
    }

    println("Condicional múltiple")

    nota = 8.0

    if (nota >= 9.5) {
        println("Roberto Rocha obtiene una beca de excelencia")
    } else if (nota >= 7.0) {
        println("Roberto Rocha ha aprobado la materia")
    } else {
        println("Roberto Rocha ha reprobado la materia")
    }

    println("Condicional enlazada")

    nota = 8.0
    val matriculaPagada = true

    if (nota >= 9.5) {
        println("Roberto Rocha obtiene una beca de excelencia")

        if (matriculaPagada) {
            println("Roberto Rocha puede matricularse")
        }

    } else if (nota >= 7.0) {
        println("Roberto Rocha ha aprobado la materia")

        if (matriculaPagada) {
            println("Roberto Rocha puede matricularse")
        }

    } else {
        println("Roberto Rocha ha reprobado la materia")
    }
}
