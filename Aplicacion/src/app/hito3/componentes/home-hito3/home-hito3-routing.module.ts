import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeHito3Page } from './home-hito3.page';

const routes: Routes = [
  {
    path: '',
    component: HomeHito3Page
  },
  {
    path: 'my-app',
    loadChildren: () => import('../my-app/my-app.module').then( m => m.MyAppPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeHito3PageRoutingModule {}
