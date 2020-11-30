import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmisionesPageRoutingModule } from './admisiones-routing.module';

import { AdmisionesPage } from './admisiones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmisionesPageRoutingModule
  ],
  declarations: [AdmisionesPage]
})
export class AdmisionesPageModule {}
