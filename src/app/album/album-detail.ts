import { Album } from "./album";

export class AlbumDetail extends Album {
  authors: Array<Author> = [];
  reviews: Array<Review> = [];

  constructor(
    id: number,
    name: string,
    image: string,
  ) {
    super(id, name, image);
    this.authors = authors;
    this.reviews = reviews;
  }
}
