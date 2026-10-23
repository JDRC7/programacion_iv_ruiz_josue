class NotaBase {
    procesar(): void {
        console.log("Procesamiento básico de nota");
    }
}

class NotaRapida extends NotaBase {
    override procesar(): void {
        console.log("Nota rápida procesada con alta prioridad");
    }
}

class NotaAudio extends NotaBase {
    override procesar(): void {
        console.log("Nota de audio procesada con transcripción");
    }
}

const notas: NotaBase[] = [
    new NotaRapida(),
    new NotaAudio()
];

notas.forEach(nota => nota.procesar());