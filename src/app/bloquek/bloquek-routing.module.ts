import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BloquekPage } from './bloquek.page';

const routes: Routes = [
  {
    path: '',
    component: BloquekPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BloquekPageRoutingModule {}
