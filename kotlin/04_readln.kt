fun main() {

    println("Input en terminal Readline")
    println("¿Como te llamas?")
    val nombre = raadLine()
    println("Welcome a otro ubiverso : $nombre")

    println("Inputs en terminal Readline")
    println("¿Como te llamas?")
    val nombre = readLine()
    println("Welcome a otro universo : $nombre")
    println("Cristales de Rick:")
    val cristalesRick = readLine()!!.toInt()
    println("Cristales de Morty:")
    val cristalesMorty = readLine()!!.toIntOrNull()
    val total = cristalesRick + cristalesMorty
    println("Total de Cristales: $total")
    
    printl("Calculadora de Energia")
    printl("Energia Inicial")
    .val energiaInical = readLine() !!.toInt()
    
}
