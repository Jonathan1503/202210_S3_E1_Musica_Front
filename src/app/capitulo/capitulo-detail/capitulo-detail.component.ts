
import { Component, Input, OnInit } from '@angular/core';
import { Capitulo } from '../capitulo';

@Component({
  selector: 'app-capitulo-detail',
  templateUrl: './capitulo-detail.component.html',
  styleUrls: ['./capitulo-detail.component.css']
})
export class CapituloDetailComponent implements OnInit {

  @Input() capituloDetail!: Capitulo;

  constructor() { }

  ngOnInit() {
  }

}
