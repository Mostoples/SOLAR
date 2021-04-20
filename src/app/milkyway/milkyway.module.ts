import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MilkywayPageRoutingModule } from './milkyway-routing.module';

import { MilkywayPage } from './milkyway.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MilkywayPageRoutingModule
  ],
  declarations: [MilkywayPage]
})
export class MilkywayPageModule {}
