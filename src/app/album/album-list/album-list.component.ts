import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { Album } from '../album';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  albums : Array<Album> = [];

  constructor(private albumService : AlbumService) { }

  getAlbums(): void {
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
    })
  }

  ngOnInit() {
    this.getAlbums();
    console.log(this.albums);
  }

}
