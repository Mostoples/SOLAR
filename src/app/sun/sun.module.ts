import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SunPageRoutingModule } from './sun-routing.module';

import { SunPage } from './sun.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SunPageRoutingModule
  ],
  declarations: [SunPage]
})
export class SunPageModule {}
