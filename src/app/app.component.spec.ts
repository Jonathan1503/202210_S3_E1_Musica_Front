import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ListaCapituloComponent } from './capitulo/listaCapitulo/listaCapitulo.component';
import { ListaPodcastComponent } from './podcast/listaPodcast/listaPodcast.component';

describe('AppComponent', () => {
 beforeEach(async () => {
   await TestBed.configureTestingModule({
     imports: [RouterTestingModule, HttpClientModule],
     declarations: [AppComponent, ListaPodcastComponent, ListaCapituloComponent],
   }).compileComponents();
 });

 it('should create the app', () => {
   const fixture = TestBed.createComponent(AppComponent);
   const app = fixture.componentInstance;
   expect(app).toBeTruthy();
 });

 it(`should have as title 'music-front'`, () => {
   const fixture = TestBed.createComponent(AppComponent);
   const app = fixture.componentInstance;
   expect(app.title).toEqual('music-front');
 });

});
