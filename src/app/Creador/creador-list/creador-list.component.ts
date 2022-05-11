import { Component, OnInit } from '@angular/core';
import { CreadorService } from '../creador.service';
import { Creador } from '../creador';


@Component({
  selector: 'app-creador-list',
  templateUrl: './creador-list.component.html',
  styleUrls: ['./creador-list.component.css'],
})
export class CreadorListComponent implements OnInit {
  creadores: Array<Creador> = [];

  constructor(
    private creadorService: CreadorService) {}

  getCreadores(): void {
    console.log('entra getCreadores');
    this.creadorService.getCreadores().subscribe((creadores) => {
      this.creadores = creadores;
    });

  }

  ngOnInit() {
    this.getCreadores();
    console.log(this.getCreadores);
  }

}
