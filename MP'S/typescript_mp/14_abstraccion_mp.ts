abstract class GestorNotaBase {
    abstract procesar(): void;
    respaldar(): void {
        console.log("El gestor realiza una copia de seguridad de la nota");
    }
}

class NotaRapida extends GestorNotaBase {
    procesar(): void {
        console.log("La nota rápida se guarda instantáneamente");
    }
}

class NotaSegura extends GestorNotaBase {
    procesar(): void {
        console.log("La nota segura se cifra antes de guardarse");
    }
}

const notas: GestorNotaBase[] = [
    new NotaRapida(),
    new NotaSegura(),
]
console.log(notas);
notas.forEach(nota => nota.procesar());






abstract class NotaMultimedia {
    abstract sincronizar(): void;
    
    analizarEspacio(): void {
        console.log("Calculando el almacenamiento disponible de la nota...");
    }
}

class NotaTexto extends NotaMultimedia {
    sincronizar(): void {
        console.log("La nota de texto se sincroniza en la nube");
    }
}

class NotaVoz extends NotaMultimedia {
    sincronizar(): void {
        console.log("La nota de voz procesa y sube el archivo de audio");
    }
}

const notaTexto = new NotaTexto();
const notaVoz = new NotaVoz();

notaTexto.sincronizar();
notaTexto.analizarEspacio();

notaVoz.sincronizar();
notaVoz.analizarEspacio();