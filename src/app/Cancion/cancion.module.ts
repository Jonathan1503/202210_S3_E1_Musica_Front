import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaCancionComponent } from './listaCancion/listaCancion.component';
import { CancionDetailComponent } from './cancion-detail/cancion-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListaCancionComponent,CancionDetailComponent],
  exports: [ListaCancionComponent]
})
export class CancionModule { }
