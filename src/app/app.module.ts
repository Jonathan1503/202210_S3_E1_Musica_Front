import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumModule } from './album/album.module';
import { GeneroModule } from './genero/genero.module';
import { TemaModule } from './Tema/tema.module';
import { CreadorModule } from './Creador/creador.module';
import { CapituloModule } from './capitulo/capitulo.module';
import { PodcastModule } from './podcast/podcast.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlbumModule,
    GeneroModule,
    TemaModule,
    CreadorModule,
    PodcastModule,
    CapituloModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }