export interface PeliculaModel {
    id: number;
    titulo: string;
    director: string;
    fechaEstreno: Date;
    duracion: number;
    genero: string;
    sinopsis: string;
    precio: number;
    rating: number;
}

/* Se puede hacer también como clase
export class PeliculaModel {
    id: number;
    titulo: string;
    director: string;
    fechaEstreno: Date;
    duracion: number;
    genero: string;
    sinopsis: string;
    precio: number;
    rating: number;
}*/