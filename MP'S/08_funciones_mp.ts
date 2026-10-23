function sumarCaracteres(caracteres1: number, caracteres2: number): number {
    return caracteres1 + caracteres2;
}

const totalCaracteres = sumarCaracteres(30, 20);
console.log(`Total de caracteres: ${totalCaracteres}`);
//Sin devolver valor 

function mostrarMensajeNota(mensaje: string): void {
    console.log(`Mensaje: ${mensaje}`);
    const titulos: string[] = ["Lista de compras", "Ideas de proyecto", "Tareas pendientes", "Recordatorio de reunión", "Borrador"];
    for (const titulo of titulos) {
        console.log(`Título de nota: ${titulo}`);
    }
}

mostrarMensajeNota("¡Bienvenido al sistema de notas!");

function procesarNota(titulo: string, prioridad?: number): void {
    if (prioridad) {
        console.log(`Procesando nota ${titulo} con nivel de prioridad: ${prioridad}`);
    } else {
        console.log(`Procesando nota ${titulo} sin nivel de prioridad especificado`);
        prioridad = 1;
        console.log(`Nivel de prioridad predeterminado asignado a ${titulo}: ${prioridad}`);
    }
}

procesarNota("Lista de compras", 90);
procesarNota("Ideas de proyecto");

function procesarNota2(titulo: string, prioridad: number=1): void {
        console.log(`Procesando nota ${titulo} con nivel de prioridad: ${prioridad}`);

    }

procesarNota2("Eduardo", 90);
procesarNota2("Ideas de proyecto");

//FUNCIONES FLECHA
function duplicarLongitud(longitud: number): number {
    return longitud * 2;
}

const duplicarLongitudFlecha = (longitud: number): number => longitud * 2;

const longitudOriginal: number = 50;

const longitudModificada: number = duplicarLongitud(longitudOriginal);
console.log(`Longitud original: ${longitudOriginal} Longitud Modificada: ${longitudModificada}`);

const longitudModificadaFlecha: number = duplicarLongitudFlecha(longitudOriginal);
console.log(`Longitud modificada (función flecha): ${longitudModificadaFlecha}`);

function formatearNota(valor:number): string;
function formatearNota(valor:string): string;
function formatearNota(valor:boolean): string;

function formatearNota(valor:number | string| boolean):string{
    if(typeof valor === "number") {
        return valor.toLocaleString("es.MX", {minimumFractionDigits:2})
    }
    if (typeof valor === "boolean"){
        return valor ? "si": "no"
    }
    return `${valor}`
}

console.log(formatearNota(1233434.5));
console.log(formatearNota(true))
console.log(formatearNota("activo"))

console.log(formatearNota(1233434.5));
console.log(formatearNota(true));
console.log(formatearNota("activo"));

function crearContadorNotas(inicio: number = 0) {
    let cuenta = inicio;
    return {
        incrementar: () => ++cuenta,
        decrementar: () => --cuenta,
        valor: () => cuenta,
        resetear: () => { cuenta = inicio; }
    }
}

const c1 = crearContadorNotas();
const c2 = crearContadorNotas(10);

c1.incrementar();
c1.incrementar();
c1.incrementar();
c2.incrementar();

console.log(c1.valor());
console.log(c2.valor());

c1.resetear();
console.log()