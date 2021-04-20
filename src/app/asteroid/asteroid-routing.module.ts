import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsteroidPage } from './asteroid.page';

const routes: Routes = [
  {
    path: '',
    component: AsteroidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsteroidPageRoutingModule {}
