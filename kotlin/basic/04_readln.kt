fun main() {

    println("Input en terminal Readline")
    println("¿Cómo te llamas?")
    val nombreInicial = readLine()
    println("Welcome a otro universo : $nombreInicial")

    println("Inputs en terminal Readline")
    println("¿Cómo te llamas?")
    val nombre = readLine()
    println("Welcome a otro universo : $nombre")
    
    println("Cristales de Rick:")
    val cristalesRick = readLine()!!.toInt()
    
    println("Cristales de Morty:")
    // Usamos ?: 0 para que si ingresa algo no numérico, tome 0 por defecto
    val cristalesMorty = readLine()?.toIntOrNull() ?: 0
    
    val total = cristalesRick + cristalesMorty
    println("Total de Cristales: $total")
    
    println("Calculadora de Energía")
    println("Energía Inicial:")
    val energiaInicial = readLine()!!.toInt()
    println("Energía ingresada: $energiaInicial")
}