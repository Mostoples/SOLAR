import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoonPage } from './moon.page';

const routes: Routes = [
  {
    path: '',
    component: MoonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoonPageRoutingModule {}
