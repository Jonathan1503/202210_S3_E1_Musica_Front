/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListaPodcastComponent } from './listaPodcast.component';
import { HttpClientModule } from '@angular/common/http';
import { Capitulo } from 'src/app/capitulo/capitulo';
import { Podcast } from '../podcast';
import faker from '@faker-js/faker';
import { PodcastDetail } from '../podcast-detail';
import { PodcastService } from '../podcast.service';

describe('ListaPodcastComponent', () => {
 let component: ListaPodcastComponent;
 let fixture: ComponentFixture<ListaPodcastComponent>;
 let debug: DebugElement;


 beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [ ListaPodcastComponent ],
     providers:[PodcastService]
   })
   .compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(ListaPodcastComponent);
   component = fixture.componentInstance;
   let podcastf= new Podcast(faker.datatype.number(),
 faker.lorem.sentence(),
 faker.lorem.sentence(),
 faker.image.imageUrl(),
 faker.lorem.sentence(),faker.datatype.number());
 let cap1= new Capitulo(faker.lorem.sentence(),podcastf,faker.datatype.number(),faker.lorem.sentence(),faker.image.imageUrl(),faker.datatype.number());
 let cap2= new Capitulo(faker.lorem.sentence(),podcastf,faker.datatype.number(),faker.lorem.sentence(),faker.image.imageUrl(),faker.datatype.number());
 let  capitulos= new Array<Capitulo>(cap1,cap2);

 component.podcasts= [
  new PodcastDetail(
    faker.datatype.number(),
    faker.lorem.sentence(),
    faker.lorem.sentence(),
    faker.image.imageUrl(),
    faker.lorem.sentence(),
    faker.datatype.number(),
    capitulos
  ),
];
   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });
});
