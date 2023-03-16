import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistCreateComponent } from './artist-create/artist-create.component';



const routes: Routes = [{
  path: 'artists',
  children: [
    {
      path: 'create',
      component: ArtistCreateComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistRoutingModule { }
