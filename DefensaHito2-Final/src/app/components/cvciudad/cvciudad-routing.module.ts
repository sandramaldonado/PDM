import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CVCiudadPage } from './cvciudad.page';

const routes: Routes = [
  {
    path: '',
    component: CVCiudadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CVCiudadPageRoutingModule {}
