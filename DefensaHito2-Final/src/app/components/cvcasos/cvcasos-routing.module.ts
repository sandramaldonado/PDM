import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CVCasosPage } from './cvcasos.page';

const routes: Routes = [
  {
    path: '',
    component: CVCasosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CVCasosPageRoutingModule {}
