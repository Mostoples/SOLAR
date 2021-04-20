import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MilkywayPage } from './milkyway.page';

const routes: Routes = [
  {
    path: '',
    component: MilkywayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MilkywayPageRoutingModule {}
