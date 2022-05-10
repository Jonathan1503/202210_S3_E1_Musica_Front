import { Component, OnInit } from '@angular/core';
import { TemaService } from '../tema.service';
import { Tema } from '../tema';


@Component({
  selector: 'app-tema-list',
  templateUrl: './tema-list.component.html',
  styleUrls: ['./tema-list.component.css'],
})
export class TemaListComponent implements OnInit {
  temas: Array<Tema> = [];

  constructor(
    private temaService: TemaService) {}

  getTemas(): void {
    console.log('entra getTemas');
    this.temaService.getTemas().subscribe((temas) => {
      this.temas = temas;
    });

  }

  ngOnInit() {
    this.getTemas();
    console.log(this.temas);
  }

}
