import { Component, OnInit } from '@angular/core';
import { Genero } from '../genero';
import { GeneroService } from '../genero.service';

@Component({
  selector: 'app-genero-list',
  templateUrl: './genero-list.component.html',
  styleUrls: ['./genero-list.component.css']
})
export class GeneroListComponent implements OnInit {

  generos: Array<Genero> = [];

  constructor(private generoService: GeneroService) { }

  getGeneros(): void {
    this.generoService.getGeneros().subscribe((generos) => {
      this.generos = generos;
    });
  }

  ngOnInit() {
    this.getGeneros();
  }

}
