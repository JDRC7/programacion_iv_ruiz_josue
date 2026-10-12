type Personaje =
|"Luke Skywalker"
|"Darth Vader"
|"Obwan Kenobi"
|"Princess Leia"
|"Han Solo"

let personaje: Personaje = "Luke Skywalker";

switch (personaje) {
    case "Luke Skywalker":
        console.log("Luke Skywalker es un Jedi");
        break;
    case "Princess Leia":
        console.log("Princess Leia es una princesa");
        break;
    case "Han Solo":
        console.log("Han Solo es un contrabandista");
        break;
    default:
        console.log("Personaje desconocido");
}

type Jedis = "Luke" | "Obwan" | "Leia" 

let jedi: Jedis = "Luke";
let nivelfuerza: number = 100;
let tieneSable: boolean = true;

switch (jedi) {
    case "Luke":
        if (nivelfuerza >= 80 && tieneSable) {
            console.log("Luke es un Jedi poderoso");
        }
        break;
    case "Obwan":
        if (nivelfuerza >= 80 && tieneSable) {
            console.log("Obwan es un Jedi poderoso");
        }
        break;
    case "Leia":
        console.log("Leia es una princesa");
        break;
    default:
        console.log("Jedi desconocido");
}