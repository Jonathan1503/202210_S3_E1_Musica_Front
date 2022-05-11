import { Tema } from "./tema";

export class TemaDetail extends Tema {
  //podcasts: Array<Podcast> = [];
  //temas: Array<Tema> = [];

  constructor(
    id: number,
    nombre: string
    //temas: Array<Tema>
  ) {
    super(id, nombre);
    //this.podcasts = podcasts;
    //this.temas = temas;
  }
}