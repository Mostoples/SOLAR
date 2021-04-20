import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SunPage } from './sun.page';

const routes: Routes = [
  {
    path: '',
    component: SunPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SunPageRoutingModule {}
