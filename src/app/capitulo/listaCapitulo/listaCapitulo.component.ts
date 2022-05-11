import { Component, OnInit } from '@angular/core';
import { Capitulo } from '../capitulo';
import { CapituloService } from '../capitulo.service';

@Component({
  selector: 'app-listaCapitulo',
  templateUrl: './listaCapitulo.component.html',
  styleUrls: ['./listaCapitulo.component.css']
})
export class ListaCapituloComponent implements OnInit {

  capitulos: Array<Capitulo> = [];
  constructor(private capituloService: CapituloService) { }
  selected: Boolean = false;
  selectedCapitulo!: Capitulo;

  getCapitulos(): void {
    this.capituloService.getCapitulos().subscribe((capitulos) => {
      this.capitulos = capitulos;
    });
  }

  ngOnInit() {
    this.getCapitulos();
  }
  onSelected(capitulo: Capitulo): void {
    this.selected = true;
    this.selectedCapitulo = capitulo;
  }

}





