/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { HttpClientModule } from '@angular/common/http';
import { GeneroListComponent } from './genero-list.component';
import { GeneroService } from '../genero.service';
import { GeneroDetail } from '../genero-detail';
import { Album } from 'src/app/album/album';

describe('GeneroListComponent', () => {
  let component: GeneroListComponent;
  let fixture: ComponentFixture<GeneroListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ GeneroListComponent ],
      providers: [GeneroService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneroListComponent);
    component = fixture.componentInstance;

    let album = new Album(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.image.imageUrl(),
    );

    component.generos = [
      new GeneroDetail(
        faker.datatype.number(),
        faker.lorem.sentence(),
        [album]
      )
    ];

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
