import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeteorPage } from './meteor.page';

const routes: Routes = [
  {
    path: '',
    component: MeteorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeteorPageRoutingModule {}
