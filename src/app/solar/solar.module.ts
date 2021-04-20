import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolarPageRoutingModule } from './solar-routing.module';

import { SolarPage } from './solar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolarPageRoutingModule
  ],
  declarations: [SolarPage]
})
export class SolarPageModule {}
