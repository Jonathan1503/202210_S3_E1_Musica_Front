import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumListComponent } from './album-list/album-list.component';
import { RouterModule } from '@angular/router';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import {  AlbumRoutingModule } from './album-routing.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AlbumRoutingModule

  ],
  exports : [AlbumListComponent],
  declarations: [AlbumListComponent, AlbumDetailComponent]
})
export class AlbumModule { }
