import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JupyterPage } from './jupyter.page';

const routes: Routes = [
  {
    path: '',
    component: JupyterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JupyterPageRoutingModule {}
