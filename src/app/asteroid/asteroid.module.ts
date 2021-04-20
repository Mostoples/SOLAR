import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsteroidPageRoutingModule } from './asteroid-routing.module';

import { AsteroidPage } from './asteroid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsteroidPageRoutingModule
  ],
  declarations: [AsteroidPage]
})
export class AsteroidPageModule {}
