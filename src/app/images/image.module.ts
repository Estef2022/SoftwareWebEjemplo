import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCreateComponent } from './image-create/image-create.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  declarations: [ImageCreateComponent]
})
export class ImageModule { }
