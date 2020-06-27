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
    path: 'registrarse',
    loadChildren: () => import('./components/registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'hito3',
    loadChildren: () => import('../app/hito3/componentes/home-hito3/home-hito3.module').then( m => m.HomeHito3PageModule)
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
  },
  {
    path: 'home-hito3',
    loadChildren: () => import('./hito3/componentes/home-hito3/home-hito3.module').then( m => m.HomeHito3PageModule)
  },
  {
    path: 'my-app',
    loadChildren: () => import('./hito3/componentes/my-app/my-app.module').then( m => m.MyAppPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
