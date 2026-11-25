// 1. Union Type con los roles dentro de la institución
type RolComunidad =
  | "Rector"
  | "Inspector"
  | "Profesor Titular"
  | "Estudiante"
  | "Representante";

let usuario: RolComunidad = "Rector";

// Switch básico para determinar permisos o descripción del rol
switch (usuario) {
    case "Rector":
        console.log("El Rector tiene acceso total al sistema académico");
        break;
    case "Estudiante":
        console.log("El Estudiante puede consultar sus calificaciones y asistencia");
        break;
    case "Representante":
        console.log("El Representante puede justificar faltas y revisar reportes");
        break;
    default:
        console.log("Rol sin permisos específicos definidos");
}

// 2. Union Type enfocado en el cuerpo docente evaluado
type Docente = "Lic. Gómez" | "Ing. Andrade" | "Dra. Paredes";

let docente: Docente = "Lic. Gómez";
let puntajeEvaluacion: number = 100; // Calificación sobre 100 en la auditoría docente
let entregoPlanificaciones: boolean = true;

// Switch con validación de desempeño académico en cada caso
switch (docente) {
    case "Lic. Gómez":
        if (puntajeEvaluacion >= 80 && entregoPlanificaciones) {
            console.log("Lic. Gómez califica para docente destacado del período");
        }
        break;
    case "Ing. Andrade":
        if (puntajeEvaluacion >= 80 && entregoPlanificaciones) {
            console.log("Ing. Andrade califica para docente destacado del período");
        }
        break;
    case "Dra. Paredes":
        console.log("Dra. Paredes está asignada a coordinación académica");
        break;
    default:
        console.log("Docente no registrado en la nómina activa");
}