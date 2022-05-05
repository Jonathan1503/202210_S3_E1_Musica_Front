import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports : [AlbumListComponent],
  declarations: [AlbumComponent, AlbumListComponent, AlbumDetailComponent]
})
export class AlbumModule { }
