import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CVScreenPage } from './cvscreen.page';

const routes: Routes = [
  {
    path: '',
    component: CVScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CVScreenPageRoutingModule {}
