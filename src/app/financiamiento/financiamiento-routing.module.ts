import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinanciamientoPage } from './financiamiento.page';

const routes: Routes = [
  {
    path: '',
    component: FinanciamientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinanciamientoPageRoutingModule {}
