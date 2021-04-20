import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoonPageRoutingModule } from './moon-routing.module';

import { MoonPage } from './moon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoonPageRoutingModule
  ],
  declarations: [MoonPage]
})
export class MoonPageModule {}
