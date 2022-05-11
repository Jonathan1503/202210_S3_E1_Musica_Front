import { Component, OnInit } from '@angular/core';
import { GeneroDetail } from '../genero-detail';
import { GeneroService } from '../genero.service';

@Component({
  selector: 'app-genero-list',
  templateUrl: './genero-list.component.html',
  styleUrls: ['./genero-list.component.css']
})
export class GeneroListComponent implements OnInit {

  selectedGenero!: GeneroDetail;
  selected = false;

  generos: Array<GeneroDetail> = [];

  constructor(private generoService: GeneroService) { }

  getGeneros(): void {
    this.generoService.getGeneros().subscribe((generos) => {
      this.generos = generos;
    });
  }

  onSelected(genero: GeneroDetail): void {
    this.selected = true;
    this.selectedGenero = genero;
  }

  ngOnInit() {
    this.getGeneros();
  }

}
