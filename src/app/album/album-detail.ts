import { Album } from "./album";

export class AlbumDetail extends Album {
  //TODO relaciones
  //artistas: Array<Artista> = [];
  //canciones: Array<Cancion> = [];
  //generos: Array<Genero> = [];

  constructor(
    id: number,
    name: string,
    image: string
    //artistas: Array<Artista>,
    //canciones: Array<Cancion>,
    //generos: Array<Genero>
  ) {
    super(id, name, image);
    //this.artistas = artistas;
    //this.canciones = canciones;
    //this.generos = generos;
  }
}
