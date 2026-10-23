type ID = string | number;
type EtiquetaNota = string;
type DimensionNota = [number, number];
type PosicionNota = {
    x: number;
    y: number;
}

const origenNota: PosicionNota = { x: 0, y: 0 };
const idNota: ID = 42;
const idNota2: ID = "not-001";

type NotaConPosicion = PosicionNota & {
    z: number;
}

interface NotaBase {
    readonly id: number;
    titulo: string;
    contenido: string;
    avatar?: string;
}

interface NotaDetallada extends NotaBase {
    categoria: string;
}

const nota1: NotaBase = {
    id: 1,
    titulo: "Lista de compras",
    contenido: "Comprar leche y pan",
};

const nota2: NotaBase = {
    id: 2,
    titulo: "Ideas de proyecto",
    contenido: "Desarrollar una aplicación en TypeScript",
    avatar: "nota-imagen.png"
    }

console.log(nota1)
console.log(nota2)

const notaDocente ={
    id: 3,
    titulo: "Clase de Programación",
    contenido: "Explicar interfaces y tipos en TypeScript",
    categoria: "educacion tiempo completo"
}