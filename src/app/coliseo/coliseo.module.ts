import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColiseoPageRoutingModule } from './coliseo-routing.module';

import { ColiseoPage } from './coliseo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColiseoPageRoutingModule
  ],
  declarations: [ColiseoPage]
})
export class ColiseoPageModule {}
