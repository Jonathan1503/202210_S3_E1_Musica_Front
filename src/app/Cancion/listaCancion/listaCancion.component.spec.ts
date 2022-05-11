/* tslint:disable:no-unused-variable */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';


import { HttpClientModule } from '@angular/common/http';


import { ListaCancionComponent } from './listaCancion.component';
import { CancionService } from '../cancion.service';
import { Cancion } from '../cancion';

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


   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });

});
