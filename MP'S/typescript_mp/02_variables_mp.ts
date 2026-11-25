// Constantes del sistema académico
const NOTA_MINIMA_APROBATORIA: number = 7.0;
const PORCENTAJE_EXAMEN_FINAL: number = 30;
const URL_PLATAFORMA_NOTAS: string = "https://colegio.edu.ec/api/v1";
const PERIODO_ACTIVO: boolean = true;

console.log("NOTA_MINIMA_APROBATORIA: ", NOTA_MINIMA_APROBATORIA);
console.log("PORCENTAJE_EXAMEN_FINAL: ", PORCENTAJE_EXAMEN_FINAL);
console.log("URL_PLATAFORMA_NOTAS: ", URL_PLATAFORMA_NOTAS);
console.log("PERIODO_ACTIVO: ", PERIODO_ACTIVO);

// Puntos extra acumulados en el parcial
let puntosExtra: number = 0;
console.log("Puntos Extra: ", puntosExtra);

puntosExtra = 5;
console.log("Puntos Extra: ", puntosExtra);

puntosExtra++; // Incremento por participación
console.log("Puntos Extra: ", puntosExtra);

puntosExtra + 5; // Operación sin asignar (no altera el valor original)
console.log("Puntos Extra: ", puntosExtra);

puntosExtra = puntosExtra + 5; // Asignación formal
console.log("Puntos Extra: ", puntosExtra);

// Datos generales del estudiante
let estudiante: string = "Juan Pérez";
let matriculaVencida: boolean = false;
console.log(estudiante);
console.log(matriculaVencida);

// Arreglo de materias inscritas
let materias: string[] = ["MATEMÁTICAS", "LITERATURA", "HISTORIA"];
console.log(materias);

// Manejo de valores opcionales o pendientes
let examenRecuperacion: number | null = null; // No ha rendido examen supletorio/recuperación
let observacionesTutor: string | undefined;   // Aún sin registrar

// Identificador único de auditoría (BigInt para IDs gigantes en base de datos)
let idRegistroAcademico: bigint = 98723982737392n;

// Tipos Symbol: Matrículas/Folios únicos para evitar duplicados en el registro
let folioA: symbol = Symbol("FOLIO-2026");
let folioB: symbol = Symbol("FOLIO-2026");
console.log(folioA === folioB); // false (cada símbolo es único en memoria)

// Objeto tipado con los datos de una materia y su estado académico
let registroMateria: {
  materia: string;
  calificacionFinal: number;
  asistenciaPorcentaje: number;
  aprobado: boolean;
} = {
  materia: "Matemáticas",
  calificacionFinal: 8.5,
  asistenciaPorcentaje: 92,
  aprobado: true
};

console.log(registroMateria);