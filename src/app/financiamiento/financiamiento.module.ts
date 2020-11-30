import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinanciamientoPageRoutingModule } from './financiamiento-routing.module';

import { FinanciamientoPage } from './financiamiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinanciamientoPageRoutingModule
  ],
  declarations: [FinanciamientoPage]
})
export class FinanciamientoPageModule {}
