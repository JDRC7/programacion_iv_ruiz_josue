// 1. Condicional simple (if)
let nota: number = 5;
if (nota < 7) {
    console.log("El estudiante debe rendir examen de recuperación");
}

// 2. Condicional con if - else if - else
if (nota >= 9) {
    console.log("El estudiante aprueba con distinción (Cuadro de honor)");
} else if (nota >= 7) {
    console.log("El estudiante aprueba el curso regular");
} else {
    console.log("El estudiante reprueba el curso");
}

// 3. Condicionales anidados (mismo comportamiento con bloques if dentro del else)
if (nota >= 9) {
    console.log("El estudiante aprueba con distinción (Cuadro de honor)");
} else {
    if (nota >= 7) {
        console.log("El estudiante aprueba el curso regular");
    } else {
        console.log("El estudiante reprueba el curso");
    }
}

// 4. Condicionales con operador lógico AND (&&)
nota = 8;
if (nota >= 7 && nota < 9) {
    console.log("El estudiante aprueba el curso regular");
} else if (nota >= 9) {
    console.log("El estudiante aprueba con distinción (Cuadro de honor)");
} else {
    console.log("El estudiante reprueba el curso");
}

// 5. Condicional con operador lógico OR (||)
// Aprueba por promedio general O por alcanzar puntaje sobresaliente en el examen final
nota = 5;
let puntajeExamenFinal: number = 56; // Sobre 100 puntos
if (nota >= 7 || puntajeExamenFinal >= 50) {
    console.log("El estudiante califica para aprobar la materia");
} else {
    console.log("El estudiante reprueba la materia");
}

/*
  Validación integral de matrícula o graduación
*/

let materiasAprobadas: number;
let asistenciaPorcentaje: number;
let sancionadoDisciplinario: boolean;

materiasAprobadas = 8;
asistenciaPorcentaje = 80;
sancionadoDisciplinario = false;

// 6. Condiciones compuestas múltiples evaluando todos los escenarios
if (materiasAprobadas >= 8 && asistenciaPorcentaje >= 75 && sancionadoDisciplinario == false) {
    console.log("El estudiante puede matricularse al siguiente ciclo lectivo");
} else if (materiasAprobadas < 8 && asistenciaPorcentaje >= 75 && sancionadoDisciplinario == false) {
    console.log("El estudiante no puede matricularse, le faltan materias aprobadas");
} else if (materiasAprobadas >= 8 && asistenciaPorcentaje < 75 && sancionadoDisciplinario == false) {
    console.log("El estudiante no puede matricularse, no cumple el mínimo de asistencia");
} else if (materiasAprobadas >= 8 && asistenciaPorcentaje >= 75 && sancionadoDisciplinario) {
    console.log("El estudiante no puede matricularse, tiene sanción disciplinaria vigente");
} else {
    console.log("El estudiante no puede matricularse, incumple múltiples requisitos o está sancionado");
}