let nivel: number = 5;
if (nivel < 10) {
    console.log("El charmander puede evolucionar a Charmeleon");
}

if (nivel >=10){
    console.log("El charmander puede evolucionar a Charizard");
} else if (nivel >= 8) {
    console.log("El charmander puede evolucionar a Charmeleon");
} else {
    console.log("El charmander no puede evolucionar");
}

if (nivel >=10){
    console.log("El charmander puede evolucionar a Charizard");
} else {
    if (nivel >= 8) {
        console.log("El charmander puede evolucionar a Charmeleon");
    } else {
        console.log("El charmander no puede evolucionar");
    }
}

//condicionadores logicos
nivel = 9;
if (nivel >= 8 && nivel < 10) {
    console.log("El charmander puede evolucionar a Charmeleon");
} else if (nivel >= 10) {
    console.log("El charmander puede evolucionar a Charizard");
} else {
    console.log("El charmander no puede evolucionar");
}

// condiconal if con operadores logicos or
nivel=5;
let poder=56;
if (nivel >= 10 || poder >= 50) {
    console.log("El charmander puede evolucionar a Charizard");
} else {
    console.log("El charmander no puede evolucionar");
}

/*

*/

let medallas: number;
let años: number;
let suspendido: boolean;

medallas=8;
años=12;
suspendido=false;

if (medallas >= 8 && años >= 12 && suspendido == false) {
    console.log("El jugador puede ingresar al torneo");
} else if (medallas < 8 && años >= 12 && suspendido == false) {
    console.log("El jugador no puede ingresar al torneo, le faltan medallas");
} else if (medallas >= 8 && años < 12 && suspendido == false) {
    console.log("El jugador no puede ingresar al torneo, le falta edad");
} else if (medallas >= 8 && años >= 12 && suspendido) {
    console.log("El jugador no puede ingresar al torneo, esta suspendido");
} else {
    console.log("El jugador no puede ingresar al torneo, le faltan medallas y edad o esta suspendido");
}


