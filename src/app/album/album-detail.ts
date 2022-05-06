import { Album } from "./album";

export class AlbumDetail extends Album {
  //TODO relaciones
  //artistas: Array<Artista> = [];
  //canciones: Array<Cancion> = [];
  //generos: Array<Genero> = [];

  constructor(
    id: number,
    titulo: string,
    imagen: string
    //artistas: Array<Artista>,
    //canciones: Array<Cancion>,
    //generos: Array<Genero>
  ) {
    super(id, titulo, imagen);
    //this.artistas = artistas;
    //this.canciones = canciones;
    //this.generos = generos;
  }
}
