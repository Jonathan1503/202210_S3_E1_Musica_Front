
import { Component, Input, OnInit } from '@angular/core';
import { Cancion } from '../cancion';

@Component({
  selector: 'app-cancion-detail',
  templateUrl: './cancion-detail.component.html',
  styleUrls: ['./cancion-detail.component.css']
})
export class CancionDetailComponent implements OnInit {

  @Input() cancionDetail!: Cancion;

  constructor() { }

  ngOnInit() {
  }

}
