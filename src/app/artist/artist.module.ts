import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistCreateComponent } from './artist-create/artist-create.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],

  declarations: [ArtistCreateComponent]
})
export class ArtistModule { }
