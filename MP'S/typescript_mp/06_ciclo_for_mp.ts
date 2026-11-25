for ( let i = 2; i < 50; i+=5) {
    console.log("Revisión de nota", i);
}

for ( let i = 40; i > 5; i-=5) {
    console.log("Revisión de nota", i);
}

for ( let i = 40; i > 0; i-=5) {
    console.log("Revisión de nota", i);
    if (i === 20) {
        console.log("La revisión de notas ha terminado");
        break;
    }
    if (i === 30) {
        console.log("La revisión de notas ha sido interrumpida");
        continue;
    }
    console.log(`La revisión de notas continúa: ${i}`);
}

//for of

const titulosNotas: string[] = ["Lista de compras", "Ideas de proyecto", "Tareas pendientes", "Recordatorio de reunión", "Ideas para el blog"];
for (let i = 0; i < titulosNotas.length; i++) {
    console.log("Título de nota: ", titulosNotas[i]);
}

for (const titulo of titulosNotas) {
    console.log("Título de nota: ", titulo);
}

const contenidoNota: string="Nota importante: Comprar café";
for (const letra of contenidoNota) {
    console.log("Letra: ", letra);
}

interface NotaDetallada {
    titulo: string;
    longitudTexto: number;
    importante: boolean;
}

const notasDetalladas: NotaDetallada[] = [
    { titulo: "Lista de compras", longitudTexto: 100, importante: true },
    { titulo: "Ideas de proyecto", longitudTexto: 250, importante: true },
    { titulo: "Tareas pendientes", longitudTexto: 50, importante: false }
];

for (const nota of notasDetalladas) {
    console.log("Nota: ", nota.titulo);
    console.log("Longitud de Texto: ", nota.longitudTexto);
    console.log("Es Importante: ", nota.importante);
}

interface CategoriaNota {
    nombre: string;
    tipo: string;
    limiteCaracteres: number;
}

const categorias: CategoriaNota[] = [
    { nombre: "Personal", tipo: "Diario", limiteCaracteres: 500 },
    { nombre: "Trabajo", tipo: "Profesional", limiteCaracteres: 1000 },
    { nombre: "Estudio", tipo: "Educativo", limiteCaracteres: 800 }
];

for ( const categoria of categorias) {
    console.log("Categoría: ", categoria.nombre),
    console.log("tipo:", categoria.tipo),
    console.log("límite de caracteres:", categoria.limiteCaracteres)
;}

const conteoNotasPorCategoria: Record<string, number> = {
    "Personal": 1000,
    "Trabajo": 500,
    "Estudio": 800
};

for (const categoria in conteoNotasPorCategoria) {
    console.log("Categoría: ${categoria}, Cantidad: ${conteoNotasPorCategoria[categoria]}");
}

const conteoPorCategoria: Record<string, number> = {
    "Personal": 1000,
    "Trabajo": 500,
    "Estudio": 800
};

for (const [categoria, cantidad] of Object.entries(conteoPorCategoria)) {
    console.log("Categoría: ${categoria}, Cantidad: ${cantidad}");
}

const etiquetasNotas: string[] = ["Urgente", "Trabajo", "Idea", "Personal", "Archivo"];
etiquetasNotas.forEach((etiqueta, index) => {
    console.log(`Etiqueta ${index + 1}: ${etiqueta}`);
});
etiquetasNotas.forEach((etiqueta) => {
    console.log(`Etiqueta: ${etiqueta}`);
});