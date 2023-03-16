import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Museo_listaComponent } from './museo_lista/museo_lista.component';
import { MuseoComponent } from './museo.component';
import { MuseoCreateComponent } from './museo-create/museo-create.component';


const routes: Routes = [{
  path: 'museums',
  children: [
    {
      path: 'create',
      component: MuseoCreateComponent
    },
    {
      path: 'list',
      component: Museo_listaComponent
    },
    {
      path: ':id',
      component: MuseoComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MuseoRoutingModule { }
