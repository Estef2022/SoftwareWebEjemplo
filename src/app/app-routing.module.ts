import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExhibicionComponent } from './exhibicion/exhibicion.component';
import { Museo_listaComponent } from './museo/museo_lista/museo_lista.component';
import {APP_BASE_HREF} from '@angular/common';

const routes: Routes = [
  { path: '', component: Museo_listaComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }]
})
export class AppRoutingModule { }
