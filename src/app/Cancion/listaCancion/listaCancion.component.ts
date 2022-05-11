import { Component, OnInit } from '@angular/core';
import { Cancion } from '../cancion';
import { CancionService } from '../cancion.service';

@Component({
  selector: 'app-listaCancion',
  templateUrl: './listaCancion.component.html',
  styleUrls: ['./listaCancion.component.css']
})
export class ListaCancionComponent implements OnInit {

  capitulos: Array<Cancion> = [];
  constructor(private cancionService: CancionService) { }
  selected: Boolean = false;
  selectedCancion!: Cancion;

  getCapitulos(): void {
    this.cancionService.getCapitulos().subscribe((canciones) => {
      this.capitulos = canciones;
    });
  }

  ngOnInit() {
    this.getCapitulos();
  }
  onSelected(cancion: Cancion): void {
    this.selected = true;
    this.selectedCancion = cancion;
  }

}





