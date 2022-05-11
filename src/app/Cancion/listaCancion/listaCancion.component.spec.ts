/* tslint:disable:no-unused-variable */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';


import { HttpClientModule } from '@angular/common/http';


import { ListaCancionComponent } from './listaCancion.component';
import { CancionService } from '../cancion.service';
import { Cancion } from '../cancion';
import { debug } from 'console';

describe('ListaCancionComponent', () => {
 let component: ListaCancionComponent;
 let fixture: ComponentFixture<ListaCancionComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [ ListaCancionComponent ],
     providers: [ CancionService ]
   })
   .compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(ListaCancionComponent);
   component = fixture.componentInstance;

   
   component.canciones = [
     new Cancion(faker.lorem.sentence(),
     faker.datatype.number(),
     ),
   ];
   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });

 it('should have an img element ', () => {
   expect(debug.query(By.css('img')).attributes['alt']).toEqual(
     component.capitulos[0].titulo
   );
 });

});
