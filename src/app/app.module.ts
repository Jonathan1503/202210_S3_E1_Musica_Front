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
import { CacionModule } from './cacion/cacion.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarModule } from 'ng-sidebar';




@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent
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
    CacionModule,
    SidebarModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }