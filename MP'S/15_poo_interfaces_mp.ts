interface GestorNota {
    titulo: string;
    caracteres: number;
    guardar(): void;
    exportar(): void; // Sin cuerpo, solo la firma
}

class NotaRapida implements GestorNota {
    titulo = "Lista de compras";
    caracteres = 150;

    guardar(): void {
        console.log("Nota rápida guardada en la memoria local");
    }

    exportar(): void {
        console.log("Exportando nota rápida");
    }
}

class NotaProyecto implements GestorNota {
    titulo = "Desarrollo en TypeScript";
    caracteres = 1200;

    guardar(): void {
        console.log("Nota de proyecto guardada en la nube");
    }

    exportar(): void {
        console.log("Exportando proyecto a PDF");
    }
}