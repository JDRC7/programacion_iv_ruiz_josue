const PI: number= 3.14159;
const IVA: number=15;
const SERVICIO_API: string= "string api service";
const ACTIVO: boolean= true;

console.log("PI: ", PI);
console.log("IVA: ", IVA);
console.log("SERVICIO_API: ", SERVICIO_API);
console.log("ACTIVO: ", ACTIVO);

let contador: number =0;
console.log("Contador: ", contador);
contador=5;
console.log("Contador: ", contador);
contador++;
console.log("Contador: ", contador);
contador+5;
console.log("Contador: ", contador);
contador=contador+5;
console.log("Contador: ", contador);
let alumno: string= "Juan";
let caducado: boolean= false;
console.log(alumno);
console.log(caducado);

let equipo: string []= ["PIKACHU", "CHARMANDER", "BULBASAUR"];
console.log(equipo);

let pokemoncapturado: string | null= null;
let pokemoninicial: string | undefined;

let experienciaAcumulada: bigint = 98723982737392n;

//tipo symbolo
let pokemon1: symbol = Symbol("Pikachu");
let pokemon2: symbol = Symbol("Pikachu");
console.log(pokemon1 === pokemon2); // false

let pickachu: { nombre: string; nivel: number; vida: number; esLegendario: boolean } = {nombre: "Pikachu", nivel: 5, vida: 100, esLegendario: false};
console.log(pickachu);
