import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ExhibicionComponent } from './exhibicion.component';
import { ExhibicionDetailComponent } from './exhibicion-detail/exhibicion-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ExhibicionComponent],
  declarations: [ExhibicionComponent, ExhibicionDetailComponent]

})
export class ExhibicionModule { }
