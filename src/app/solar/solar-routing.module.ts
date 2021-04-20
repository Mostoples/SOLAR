import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolarPage } from './solar.page';

const routes: Routes = [
  {
    path: '',
    component: SolarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolarPageRoutingModule {}
