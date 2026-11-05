
fun main() {
    println("Operadores en Kotlin")
    println("Operadores Aritmeticos")
    var numero1: Double = 10.50
    var numero2: Double = 5.50
    var suma: Double = numero1 + numero2
    var resta: Double = numero1 - numero2
    var multiplicacion: Double = numero1 * numero2
    var division: Double = numero1 / numero2
    var modulo: Double = numero1 % numero2
    
    println("Suma + $numero1 + $numero" = ${numero1+numero2})
    println("Suma: $numero1 + $numero2 = $suma")
    println("Resta: $numero1 - $numero2 = ${numero1 - numero2}")
    println("Resta: $numero1 - $numero2 = $resta")
    println("Multiplicacion: $numero1 * $numero2 = ${numero1 * numero2}")
    println("Multiplicacion: $numero1 * $numero2 = $multiplicacion")
    println("Division: $numero1 / $numero2 = ${numero1 / numero2}")
    println("Division: $numero1 / $numero2 = $division")
    println("Modulo: $numero1 % $numero2 = ${numero1 % numero2}")
    println("Modulo: $numero1 % $numero2 = $modulo")

    println("Prioridades de los operadores aritmeticos")
    println("1()")
    println("2* / %")
    println("3+ -")
    val cristales = 10+3*5+5
    println("Cristales $cristales")
    val energia = 15/5*5
    println("Energia $energia")
    val combustible = 100+20/4*3-10%3
    println("Combustible $combustible")

    println("Operadores de Comparacion")
    
    println("Igual a == ${10==10}")
    println("Diferente de != ${10!=10}")
    println("Mayor que > ${10>10}")
    println("Menor que < ${10<10}")
    println("Mayor o igual que >= ${10>=10}")
    println("Menor o igual que <= ${10<=10}")

}

{   

    println("Operadores Logicos")
    var c = true
    var d = false
    println("c AND d: ${c && d}")
    println("c OR d: ${c || d}")
    println("NOT c: ${!c}")

}   
