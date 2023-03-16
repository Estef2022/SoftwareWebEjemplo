import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuseoComponent } from './museo.component';
import { Museo_listaComponent } from './museo_lista/museo_lista.component';
import { RouterModule } from '@angular/router';
import { MuseoCreateComponent } from './museo-create/museo-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MuseoRoutingModule } from './museo-routing.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MuseoRoutingModule,
    ReactiveFormsModule
  ],
  exports: [Museo_listaComponent
  ],
  declarations: [MuseoComponent, Museo_listaComponent, MuseoCreateComponent]
})
export class MuseoModule { }
