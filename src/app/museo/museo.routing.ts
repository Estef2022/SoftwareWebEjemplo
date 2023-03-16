import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MuseoComponent } from './museo.component';
import { Museo_listaComponent } from './museo_lista/museo_lista.component';

const routes: Routes = [
  {
    path: 'museums',
    children: [
      {
        path: 'list',
        component: Museo_listaComponent,
      },
      {
        path: ':id',
        component: MuseoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MuseoRoutingModule {}
