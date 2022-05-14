import { Component, Input, OnInit } from '@angular/core';
import { Cacion } from '../cacion';


@Component({
  selector: 'app-cacion-detail',
  templateUrl: './cacion-detail.component.html',
  styleUrls: ['./cacion-detail.component.css']
})
export class CacionDetailComponent implements OnInit {

  @Input() cacionDetail!: Cacion;


  constructor() { }

  ngOnInit(): void {
  }

}
