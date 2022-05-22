import { Component, OnInit } from '@angular/core';
import { CacionDetail } from '../cacion-detail';

import { CacionService } from '../cacion.service';


@Component({
  selector: 'app-cacion-list',
  templateUrl: './cacion-list.component.html',
  styleUrls: ['./cacion-list.component.css']
})
export class CacionListComponent implements OnInit {


  cacions: Array<CacionDetail> = [];
  selectedCacion!: CacionDetail;
  selected: Boolean = false;


  constructor(private cancionService: CacionService) { }

  getCanciones(): void {
    this.cancionService.getCanciones().subscribe((cacions) => {
      this.cacions = cacions;
    });
  }
  onSelected(cacion: CacionDetail): void {
    this.selected = true;
    this.selectedCacion = cacion;
  }
 
  ngOnInit() {
    this.getCanciones();
    console.log(this.cacions);

  }
 
 }