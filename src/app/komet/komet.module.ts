import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KometPageRoutingModule } from './komet-routing.module';

import { KometPage } from './komet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KometPageRoutingModule
  ],
  declarations: [KometPage]
})
export class KometPageModule {}
