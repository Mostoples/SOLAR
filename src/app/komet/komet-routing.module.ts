import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KometPage } from './komet.page';

const routes: Routes = [
  {
    path: '',
    component: KometPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KometPageRoutingModule {}
