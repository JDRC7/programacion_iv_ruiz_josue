let memoriaNota = 1024;
let memoriaNotaMaxima = 2048;

while (memoriaNota < memoriaNotaMaxima) {
    console.log("Espacio de la nota: ", memoriaNota);
    memoriaNota += 256; // Incremento de espacio
}


let nivelRevision = 1;
let notaValida = 0;
let revisionesNota = 0;

while (nivelRevision <= 10) {
    console.log("Nivel de revisión de nota:", nivelRevision);
    revisionesNota++;

    let aprobada = Math.random() < 0.5;

    if (aprobada) {
        notaValida++;
        console.log(`Revisión ${revisionesNota}: ¡Aprobada! Total de notas válidas: ${notaValida}`);
    } else {
        console.log(`Revisión ${revisionesNota}: Rechazada. Total de notas válidas: ${notaValida}`);
    }
}

let respaldos = 0;
do {
    respaldos++;
    console.log(`Respaldo número: ${respaldos}`);
} while (respaldos < 5);


interface NotaDetallada {
  titulo: string;
  categoria: string;
  longitud: number;
}

const notasRevisadas: NotaDetallada[] = [
  {
      titulo: "Lista de compras", categoria: "Personal", longitud: 1800,
      longitudTexto: 0,
      importante: false
  },
  {
      titulo: "Ideas de proyecto", categoria: "Trabajo", longitud: 1000,
      longitudTexto: 0,
      importante: false
  },
  {
      titulo: "Tareas pendientes", categoria: "Trabajo", longitud: 1200,
      longitudTexto: 0,
      importante: false
  },
  {
      titulo: "Recordatorio", categoria: "Personal", longitud: 900,
      longitudTexto: 0,
      importante: false
  },
  {
      titulo: "Borrador", categoria: "Personal", longitud: 800,
      longitudTexto: 0,
      importante: false
  }
];

let indice = 0;
while (indice < notasRevisadas.length) {
  const nota = notasRevisadas[indice];
  if (nota?.categoria === "Trabajo") {
    indice++;
    continue;
  }
  if (nota?.longitud < 1000) {
    break;
  }
  console.log(`Título: ${nota.titulo}, Categoría: ${nota.categoria}, Longitud: ${nota.longitud}`);
}