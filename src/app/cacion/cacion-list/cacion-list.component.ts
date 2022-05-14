import { Component, OnInit } from '@angular/core';
import{Cacion}from '../cacion'
import { CacionService } from '../cacion.service';


@Component({
  selector: 'app-cacion-list',
  templateUrl: './cacion-list.component.html',
  styleUrls: ['./cacion-list.component.css']
})
export class CacionListComponent implements OnInit {


  cacions: Array<Cacion> = [];
  selectedCacion!: Cacion;
  selected = false;


  constructor(private cancionService: CacionService) { }

  getCanciones(): void {
    this.cancionService.getCanciones().subscribe((cacions) => {
      this.cacions = cacions;
    });
  }
  onSelected(cacion: Cacion): void {
    this.selected = true;
    this.selectedCacion = cacion;
  }
 
  ngOnInit() {
    this.getCanciones();
  }
 
 }