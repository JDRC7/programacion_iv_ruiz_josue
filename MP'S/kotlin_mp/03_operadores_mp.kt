fun main() {
    println("Operadores en Kotlin - Sistema de Notas")
    println("Operadores Aritmeticos")
    var notaDeberes: Double = 9.50
    var notaExamen: Double = 7.50
    var suma: Double = notaDeberes + notaExamen
    var resta: Double = notaDeberes - notaExamen
    var multiplicacion: Double = notaDeberes * notaExamen
    var division: Double = notaDeberes / notaExamen
    var modulo: Double = notaDeberes % notaExamen
    
    println("Suma: $notaDeberes + $notaExamen = ${notaDeberes + notaExamen}")
    println("Suma: $notaDeberes + $notaExamen = $suma")
    println("Resta: $notaDeberes - $notaExamen = ${notaDeberes - notaExamen}")
    println("Resta: $notaDeberes - $notaExamen = $resta")
    println("Multiplicacion: $notaDeberes * $notaExamen = ${notaDeberes * notaExamen}")
    println("Multiplicacion: $notaDeberes * $notaExamen = $multiplicacion")
    println("Division: $notaDeberes / $notaExamen = ${notaDeberes / notaExamen}")
    println("Division: $notaDeberes / $notaExamen = $division")
    println("Modulo: $notaDeberes % $notaExamen = ${notaDeberes % notaExamen}")
    println("Modulo: $notaDeberes % $notaExamen = $modulo")

    println("\nPrioridades de los operadores aritmeticos")
    println("1 ()")
    println("2 * / %")
    println("3 + -")
    val puntosAcumulados = 2 + 2 * 3 + 2
    println("Puntos acumulados: $puntosAcumulados")
    val promedioParcial = 24 / 3 * 1
    println("Promedio parcial: $promedioParcial")
    val notaFinalCalculada = 5 + 12 / 4 * 2 - 10 % 3
    println("Nota final calculada: $notaFinalCalculada")

    println("\nOperadores de Comparacion")
    println("Igual a == ${10 == 10}")
    println("Diferente de != ${10 != 10}")
    println("Mayor que > ${10 > 10}")
    println("Menor que < ${10 < 10}")
    println("Mayor o igual que >= ${10 >= 10}")
    println("Menor o igual que <= ${10 <= 10}")

    println("\nOperadores Logicos")
    var entregaA tiempo = true
    var conductaAprobada = false
    println("entregaA_tiempo AND conductaAprobada: ${entregaA_tiempo && conductaAprobada}")
    println("entregaA_tiempo OR conductaAprobada: ${entregaA_tiempo || conductaAprobada}")
    println("NOT entregaA_tiempo: ${!entregaA_tiempo}")

    val promedio = 8.5
    val asistenciaCompleta = true
    val apruebaDirecto = promedio >= 7.0 && asistenciaCompleta
    println("¿Aprueba directo el semestre? $apruebaDirecto")

    val tieneJustificacion = false
    val autorizadoPorInspector = true
    val puedeRendirSupletorio = tieneJustificacion || autorizadoPorInspector
    println("¿Puede rendir examen supletorio? $puedeRendirSupletorio")

    println("\nOperadores de asignacion")
    println("Control Academico - Josue Ruiz")
    
    val NOTA_MINIMA_APROBACION = 7.0
    val docente = "Josue Ruiz"
    var notaEstudiante = 6.5
    var oportunidadesSupletorio = 2
    val matriculaVigente = true

    println("Docente: $docente")
    notaEstudiante += 1.5 // Puntos extra por proyecto
    oportunidadesSupletorio--
    
    println("Nota actualizada: $notaEstudiante")
    println("Oportunidades restantes: $oportunidadesSupletorio")
    
    val cumpleNota = notaEstudiante >= NOTA_MINIMA_APROBACION
    val tieneOportunidades = oportunidadesSupletorio >= 0
    val apruebaMateria = cumpleNota && tieneOportunidades && matriculaVigente

    println("¿Cumple con la nota minima? $cumpleNota")
    println("¿Tiene oportunidades disponibles? $tieneOportunidades")
    println("¿Aprueba la materia? $apruebaMateria")
}