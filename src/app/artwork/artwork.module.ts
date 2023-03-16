import { ArtworkCreateComponent } from './artwork-create/artwork-create.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtworkComponent } from './artwork.component';
import { ArtworkListComponent } from './artwork-list/artwork-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  exports: [ArtworkListComponent],
  declarations: [ArtworkComponent, ArtworkListComponent, ArtworkCreateComponent]
})
export class ArtworkModule { }
