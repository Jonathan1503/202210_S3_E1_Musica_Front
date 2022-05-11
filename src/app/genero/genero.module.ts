import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneroListComponent } from './genero-list/genero-list.component';
import { GeneroDetailComponent } from './genero-detail/genero-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [GeneroListComponent],
  declarations: [GeneroListComponent,GeneroDetailComponent]
})
export class GeneroModule { }
