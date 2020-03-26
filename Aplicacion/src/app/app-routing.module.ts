import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'log',
    loadChildren: () => import('./components/log/log.module').then( m => m.LogPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'add-anuncio',
    loadChildren: () => import('./components/add-anuncio/add-anuncio.module').then( m => m.AddAnuncioPageModule)
  },
  {
    path: 'clasificados',
    loadChildren: () => import('./components/clasificados/clasificados.module').then( m => m.ClasificadosPageModule)
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./components/registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
