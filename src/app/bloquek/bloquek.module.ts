import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BloquekPageRoutingModule } from './bloquek-routing.module';

import { BloquekPage } from './bloquek.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BloquekPageRoutingModule
  ],
  declarations: [BloquekPage]
})
export class BloquekPageModule {}
