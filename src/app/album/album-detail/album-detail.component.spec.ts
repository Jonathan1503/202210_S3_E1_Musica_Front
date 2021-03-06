/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { AlbumDetailComponent } from './album-detail.component';
import { AlbumDetail } from '../album-detail'
import { Genero } from 'src/app/genero/genero';

describe('AlbumDetailComponent', () => {
  let component: AlbumDetailComponent;
  let fixture: ComponentFixture<AlbumDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumDetailComponent);
    component = fixture.componentInstance;

    let genero = new Genero(
      faker.datatype.number(),
      faker.lorem.sentence()
    );

    component.albumDetail =
      new AlbumDetail(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.image.imageUrl(),
        [genero]
      );

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an img element', () => {
    expect(debug.query(By.css('img')).attributes['alt']).toEqual(
      component.albumDetail.titulo
    );
  });
});
