import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CVLogoPage } from './cvlogo.page';

const routes: Routes = [
  {
    path: '',
    component: CVLogoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CVLogoPageRoutingModule {}
