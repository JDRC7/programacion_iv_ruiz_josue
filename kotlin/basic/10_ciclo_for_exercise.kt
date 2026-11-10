fun main() {
    var presupuestoTotal = 0.0
    println("Presupuesto de Expedicion")

    for (viaje in 1..6) {
        val costoOriginal = viaje * 25
        var descuento = 0.0
        
        if (costoOriginal >= 100) {
            descuento = costoOriginal * 0.20
        }
        
        val costoFinal = costoOriginal - descuento
        presupuestoTotal += costoFinal // Se acumula el costo final de cada viaje
        
        println("Viaje $viaje")
        println("Costo Original $costoOriginal")
        println("Descuento aplicado $descuento")
        println("Costo Final $costoFinal")
        println("------------------------")
    }
    
    // Corregido el especificador de formato a %.2f (o %.1f)
    println("Presupuesto Total de la Expedicion: %.2f creditos".format(presupuestoTotal))
}