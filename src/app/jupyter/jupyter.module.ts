import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JupyterPageRoutingModule } from './jupyter-routing.module';

import { JupyterPage } from './jupyter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JupyterPageRoutingModule
  ],
  declarations: [JupyterPage]
})
export class JupyterPageModule {}
