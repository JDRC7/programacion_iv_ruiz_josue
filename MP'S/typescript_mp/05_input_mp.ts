let estudiante = prompt("Ingrese el nombre del estudiante: ");
let promedio = Number(prompt("Ingrese el promedio general del estudiante (sobre 10): "));
let asistencia = Number(prompt("Ingrese el porcentaje de asistencia (0 - 100): "));

// 1. Valida si el estudiante pertenece a la nómina de preseleccionados
if (estudiante === "Mateo" || estudiante === "Valeria" || estudiante === "Camila" || estudiante === "Sebastián") {
    // 2. Valida los requisitos de mérito académico y puntualidad
    if (promedio >= 9.0 && asistencia >= 85) {
        console.log("Estudiante preseleccionado y cumple los requisitos para la beca de honor");
    } else {
        console.log("Estudiante preseleccionado pero no cumple con los requisitos mínimos de promedio o asistencia");
    }
} else {
    console.log("Estudiante no registrado en la nómina de preseleccionados");
}