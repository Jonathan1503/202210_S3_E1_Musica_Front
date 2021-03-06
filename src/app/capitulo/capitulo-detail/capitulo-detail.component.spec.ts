/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CapituloDetailComponent } from './capitulo-detail.component';
import { faker } from '@faker-js/faker';
import { CapituloDetail } from '../capitulo-detail';
import { Capitulo } from '../capitulo';
import { Podcast } from 'src/app/podcast/podcast';


describe('CapituloDetailComponent', () => {
 let component: CapituloDetailComponent;
 let fixture: ComponentFixture<CapituloDetailComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     declarations: [ CapituloDetailComponent ]
   })
   .compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(CapituloDetailComponent);
   component = fixture.componentInstance;

   let podcastf= new Podcast(faker.datatype.number(),
   faker.lorem.sentence(),
   faker.lorem.sentence(),
   faker.image.imageUrl(),
   faker.lorem.sentence(),faker.datatype.number());

   component.capituloDetail=
    new Capitulo(
      faker.lorem.sentence(),
      podcastf,faker.datatype.number(),
      faker.lorem.sentence(),
      faker.image.imageUrl(),

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
    component.capituloDetail.titulo
  );
});
});
