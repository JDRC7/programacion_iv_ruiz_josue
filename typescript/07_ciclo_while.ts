let memoriaDroide = 1024;
let memoriaDroideMaxima = 2048;

while (memoriaDroide < memoriaDroideMaxima) {
    console.log("Memoria del droide: ", memoriaDroide);
    memoriaDroide += 256; // Incremento de memoria
}


let nivel = 1;
let aciertoNave = 0;
let disparosNave = 0;

while (nivel <= 10) {
    console.log("Nivel del entrenamiento jedi:", nivel);
    disparosNave++;

    let acierto = Math.random() < 0.5;

    if (acierto) {
        aciertoNave++;
        console.log(`Disparo ${disparosNave}: ¡Acierto! Total de aciertos: ${aciertoNave}`);
    } else {
        console.log(`Disparo ${disparosNave}: Fallo. Total de aciertos: ${aciertoNave}`);
    }
}

let guerras = 0;
do {
    guerras++;
    console.log(`Guerras numeri: ${guerras}`);
} while (guerras < 5);


interface Nave {
  nombre: string;
  tipo: string;
  velocidad: number;
}

const navesEscaneadas: Nave[] = [
  { nombre: "Star Destroyer", tipo: "Destructor estelar", velocidad: 1800 },
  { nombre: "X-Wing", tipo: "Caza estelar", velocidad: 1000 },
  { nombre: "TIE Fighter", tipo: "Caza estelar", velocidad: 1200 },
  { nombre: "Millennium Falcon", tipo: "Carguero ligero", velocidad: 900 },
  { nombre: "Star Destroyer", tipo: "Destructor estelar", velocidad: 800 }
];

let indice = 0;
while (indice < navesEscaneadas.length) {
  const nave = navesEscaneadas[indice];
  if (nave?.tipo === "Caza estelar") {
    indice++;
    continue;
  }
  if (nave?.velocidad < 1000) {
    break;
  }
  console.log(`Nave: ${nave.nombre}, Tipo: ${nave.tipo}, Velocidad: ${nave.velocidad}`);
}