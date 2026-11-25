class NotaGestor {
    public titulo: string;
    public caracteres: number;
    public almacenamiento: number;
    constructor(
        titulo: string,
        caracteres: number,
        almacenamiento: number,
    ){
        this.titulo=titulo;
        this.caracteres=caracteres;
        this.almacenamiento=almacenamiento;
    }
    editar():void{
        this.almacenamiento-=5;
        console.log(`${this.titulo}`)
    }
    expandir():void{
        this.caracteres+=10;
        console.log(`${this.titulo} ha sido expandida`)
    }
}

const nota1= new NotaGestor("Lista de compras",80,100)
const nota2= new NotaGestor("Ideas de proyecto",90,100)

nota1.editar();
console.log(nota2.caracteres)
nota2.expandir();
nota2.expandir();
console.log(nota2.caracteres)
console.log(nota2.almacenamiento)