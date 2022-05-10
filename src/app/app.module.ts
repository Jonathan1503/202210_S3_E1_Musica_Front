import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TemaModule } from './Tema/tema';
import { TemaListComponent } from './Tema/Tema-list/tema-list.component';
import { AuthorModule } from './author/author.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TemaListComponent,
  ],
  imports: [
    BrowserModule,
    TemaModule,
    AuthorModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
