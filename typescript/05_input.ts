let personaje = prompt("Ingrese el nombre del personaje: ");
let edad = Number(prompt("Ingrese la edad del personaje: "));
let fuerza = Number(prompt("Ingrese el nivel de fuerza del personaje: "));

if (personaje === "Luke" || personaje === "Vader" || personaje === "Organa" || personaje === "Solo") {
   if (edad >= 18 && fuerza >= 80) {
       console.log("Personaje válido y cumple con los requisitos");
   } else {
       console.log("Personaje válido pero no cumple con los requisitos");
   }
} else {
    console.log("Personaje no válido");
}