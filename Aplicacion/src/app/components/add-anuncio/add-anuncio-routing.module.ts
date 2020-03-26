import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAnuncioPage } from './add-anuncio.page';

const routes: Routes = [
  {
    path: '',
    component: AddAnuncioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddAnuncioPageRoutingModule {}
