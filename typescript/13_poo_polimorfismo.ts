class Boxeador {
    atacar(): void {
        console.log("Ataque básico");
    }
}

class Rocky extends Boxeador {
    override atacar(): void {
        console.log("Rocky ataca con fuerza");
    }
}

class Apollo extends Boxeador {
    override atacar(): void {
        console.log("Apollo ataca con fuerza");
    }
}

const boxeadores: Boxeador[] = [
    new Rocky(),
    new Apollo()
];

boxeadores.forEach(boxeador => boxeador.atacar());