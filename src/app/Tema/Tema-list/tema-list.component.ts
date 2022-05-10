import { Component, OnInit } from '@angular/core';
import { TemaService } from '../tema.service';
import { TemaModule } from '../tema';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-tema-list',
  templateUrl: './tema-list.component.html',
  styleUrls: ['./tema-list.component.css'],
})
export class TemaListComponent implements OnInit {
  temas: Array<TemaModule> = [];
  poster: string = "";
  descrip: string = "";
  Co_seasons: number = 0;
  item: number = 0;

  constructor(
    private temaService: TemaService,
    private httpClient: HttpClient
  ) {}

  getSeries(): void {
    console.log('entra getSeries');
    this.temaService.getTemas().subscribe((temas) => {
      this.temas = temas;
    });

  }

  getSeriesByJson(): void {
    console.log('entra getSeriesByJson');
  }

  ngOnInit() {
    this.getSeriesByJson();
  }

  Model( poster:string, descrip:string):void{
      this.poster= poster;
      this.descrip= descrip;
      $("#btnModal").click();
  }
}
