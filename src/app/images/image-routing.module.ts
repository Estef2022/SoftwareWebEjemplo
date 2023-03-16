import { ImageCreateComponent } from './image-create/image-create.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [{
  path: 'image',
  children: [
  {
    path: 'create/:name/:artistId/:artworkId',
    component: ImageCreateComponent
  }]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
 })
 export class ImageRoutingModule{}
