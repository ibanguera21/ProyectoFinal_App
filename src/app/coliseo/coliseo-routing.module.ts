import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColiseoPage } from './coliseo.page';

const routes: Routes = [
  {
    path: '',
    component: ColiseoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColiseoPageRoutingModule {}
