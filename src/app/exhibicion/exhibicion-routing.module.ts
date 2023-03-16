import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExhibicionDetailComponent } from './exhibicion-detail/exhibicion-detail.component';
import { ExhibicionComponent } from './exhibicion.component';

const routes: Routes = [{
  path: 'exhibitions',
  children: [
    {
      path: 'list',
      component: ExhibicionComponent
    },
    {
      path: 'list/:id',
      component: ExhibicionComponent
    },
    {
      path: ':id',
      component: ExhibicionDetailComponent
    },
  ]
 }];

 @NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
 })
export class  ExhibicionRoutingModule{}
