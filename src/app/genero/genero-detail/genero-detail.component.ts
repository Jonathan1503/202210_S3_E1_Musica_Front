import { Component,Input, OnInit } from '@angular/core';
import { GeneroDetail } from '../genero-detail';

@Component({
  selector: 'app-genero-detail',
  templateUrl: './genero-detail.component.html',
  styleUrls: ['./genero-detail.component.css']
})
export class GeneroDetailComponent implements OnInit {

  @Input() generoDetail!: GeneroDetail;

  constructor() { }

  ngOnInit() {
  }

}
