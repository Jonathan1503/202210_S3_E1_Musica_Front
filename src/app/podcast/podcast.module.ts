import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCapituloComponent } from '../capitulo/listaCapitulo/listaCapitulo.component';
import { ListaPodcastComponent } from './listaPodcast/listaPodcast.component';
import { PodcastDetailComponent } from './podcast-detail/podcast-detail.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListaPodcastComponent,PodcastDetailComponent],
  exports: [ListaPodcastComponent]
})
export class PodcastModule { }
