import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CacionListComponent } from './cacion-list/cacion-list.component';
import { CacionDetailComponent } from './cacion-detail/cacion-detail.component';



@NgModule({
  declarations: [
    CacionListComponent,
    CacionDetailComponent
  ],
  exports: [CacionListComponent],
  
  imports: [
    CommonModule
  ]
})
export class CacionModule { }
