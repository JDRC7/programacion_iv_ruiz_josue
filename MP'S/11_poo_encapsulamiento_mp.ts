class NotaPrivada {
    private almacenamiento: number = 100;

    reducirAlmacenamiento(espacio: number): void {
        if (espacio > 0){
            this.almacenamiento = Math.max(0, this.almacenamiento - espacio);
        }
    }
    consultarAlmacenamiento(): number {
        return this.almacenamiento
    }
}
const notaPersonal = new NotaPrivada();
notaPersonal.reducirAlmacenamiento(50);
console.log(notaPersonal.consultarAlmacenamiento)
notaPersonal.reducirAlmacenamiento(25);
console.log(notaPersonal.consultarAlmacenamiento)