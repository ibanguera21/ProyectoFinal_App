import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevarutaPage } from './nuevaruta.page';

const routes: Routes = [
  {
    path: '',
    component: NuevarutaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevarutaPageRoutingModule {}
