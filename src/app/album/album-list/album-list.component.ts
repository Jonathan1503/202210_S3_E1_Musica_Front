import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { AlbumDetail } from '../album-detail';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  albums : Array<AlbumDetail> = [];

  selectedAlbum!: AlbumDetail;
  selected: Boolean = false;

  constructor(private albumService : AlbumService) { }

  getAlbums(): void {
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
    })
  }

  onSelected(album: AlbumDetail): void {
    this.selected = true;
    this.selectedAlbum = album;
  }

  ngOnInit() {
    this.getAlbums();
    console.log(this.albums);
  }

}
