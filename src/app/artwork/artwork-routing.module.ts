import { ArtworkCreateComponent } from './artwork-create/artwork-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtworkListComponent } from './artwork-list/artwork-list.component';
import { ArtworkComponent } from './artwork.component';

const routes: Routes = [{
  path: 'artwork',
  children: [
    {
      path: 'list/museum/:id',
      component: ArtworkListComponent
    },
    {
      path: 'list/artists',
      component: ArtworkListComponent
    },
    {
      path: 'create',
      component: ArtworkCreateComponent
    },
    {
      path: ':id',
      component: ArtworkComponent
    },
]}];

 @NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
 })
export class  ArtworkRoutingModule{}
