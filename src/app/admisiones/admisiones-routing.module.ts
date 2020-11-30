import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmisionesPage } from './admisiones.page';

const routes: Routes = [
  {
    path: '',
    component: AdmisionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmisionesPageRoutingModule {}
