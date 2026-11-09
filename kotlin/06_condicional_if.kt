fun main (){
    println("Condicional If")
    println("Condicional Simple o un camino")
    val energia = 80
    if (energia>=50){
        println("Rick puede abrir el portal")
    } else {
        println("Energia insuficiente")
    }

    printl("Condiconal multiple")
    energia =70
    if (energia>=100){
        printl("Rick puede abrir el portal")
    } else if (energia>=50){
        printl("energia sufciciente")
    } else {
        println("Energia insuficiente")
    }

    println("Condiconal multiple")
    energia = 70
    val motorActivo = true
    if (energia>=100){
        println("Energia suficiente")
        if (motorActivo){
            println("puerde despegar")
        }
    } else{
        printl("Energia suficiente")
    }
    
}