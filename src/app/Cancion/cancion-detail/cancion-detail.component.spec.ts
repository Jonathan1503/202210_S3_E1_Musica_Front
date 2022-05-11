/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CancionDetailComponent } from './cancion-detail.component';
import { faker } from '@faker-js/faker';
import { Cancionetail } from '../cancion-detail';
import { Cancion } from '../cancion';


describe('CancionDetailComponent', () => {
 let component: CancionDetailComponent;
 let fixture: ComponentFixture<CancionDetailComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     declarations: [ CancionDetailComponent ]
   })
   .compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(CancionDetailComponent);
   component = fixture.componentInstance;

   component.cancionDetail=
    new Cancion(
      faker.lorem.sentence(),
      faker.datatype.number(),
    );

   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });
 it('should have an img element', () => {
  expect(debug.query(By.css('img')).attributes['alt']).toEqual(
    component.cancionDetail.titulo
  );
});
});
