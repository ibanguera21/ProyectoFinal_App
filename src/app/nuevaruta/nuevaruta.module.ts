import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevarutaPageRoutingModule } from './nuevaruta-routing.module';

import { NuevarutaPage } from './nuevaruta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevarutaPageRoutingModule
  ],
  declarations: [NuevarutaPage]
})
export class NuevarutaPageModule {}
