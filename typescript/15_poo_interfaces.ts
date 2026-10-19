interface ParticipanteTorneo {
    nombre: string;
    nivelPoder: number;
    presentarTecnica(): void;
    transformarse(): void; // Sin cuerpo, solo la firma
}

class Goku implements ParticipanteTorneo {
    nombre = "Goku";
    nivelPoder = 9000;

    presentarTecnica(): void {
        console.log("Goku utiliza el Kamehameha");
    }

    transformarse(): void {
        console.log("Transformacion");
    }
}

class Vegeta implements ParticipanteTorneo {
    nombre = "Vegeta";
    nivelPoder = 8500;

    presentarTecnica(): void {
        console.log("Vegeta utiliza el Final Flash");
    }

    transformarse(): void {
        console.log("Transformacion vegeta");
    }
}