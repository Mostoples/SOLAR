import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeteorPageRoutingModule } from './meteor-routing.module';

import { MeteorPage } from './meteor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeteorPageRoutingModule
  ],
  declarations: [MeteorPage]
})
export class MeteorPageModule {}
