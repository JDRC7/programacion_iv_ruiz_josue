//Funciones Simples
//Devolviendo un valor
function sumarCreditos(credito1: number, credito2: number): number {
    return credito1 + credito2;
}

const totalCreditos: number = sumarCreditos(10, 20);
console.log("Total de Créditos: ", totalCreditos);

// Sin devolver un valor
function mostrarCentroDeEntrenamiento(nombre: string): void {
  console.log(`Centro de entrenamiento: ${nombre}`);
  const naves: string[] = ["X-Wing", "TIE Fighter", "Millennium Falcon"];
  for (const nave of naves) {
    console.log(`Nave disponible: ${nave}`);
  }
}

mostrarCentroDeEntrenamiento("Jedi Academy");

// Funciones con parámetros opcionales
function entrenarJedi(nombre: string, nivel?: number): void {
  if (nivel) {
    console.log(`El Jedi ${nombre} está entrenando en el nivel ${nivel}.`);
  } else {
    console.log(`El Jedi ${nombre} está entrenando.`);
    nivel = 1; // Asignación de nivel por defecto si no se proporciona
    console.log(`Nivel asignado por defecto: ${nivel}`);
  }
}

entrenarJedi("Luke Skywalker", 5);
entrenarJedi("Yoda");

function entrenarJedi2(nombre: string, nivel1: number=1): void {
  if (nivel1) {
    console.log(`El Jedi ${nombre} está entrenando en el nivel ${nivel1}.`);
  } 
}
entrenarJedi2("Luke Skywalker", 5);
entrenarJedi2("Yoda");

//funciones flecha
const potenciarFuerza = (fuerza: number): number => {
  return fuerza * 2;
};

const potenciarFuerzaFlecha = (fuerza: number): number => fuerza *2;

const fuerzaOriginal : number = 50;
const fuerzaPotenciada: number = potenciarFuerza(fuerzaOriginal);
console.log(`Fuerza original: ${fuerzaOriginal}`);
console.log(`Fuerza potenciada: ${fuerzaPotenciada}`);