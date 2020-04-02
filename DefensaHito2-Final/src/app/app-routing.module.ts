import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'cvlogo',
    loadChildren: () => import('./components/cvlogo/cvlogo.module').then( m => m.CVLogoPageModule)
  },
  {
    path: 'cvcasos',
    loadChildren: () => import('./components/cvcasos/cvcasos.module').then( m => m.CVCasosPageModule)
  },
  {
    path: 'cvciudad',
    loadChildren: () => import('./components/cvciudad/cvciudad.module').then( m => m.CVCiudadPageModule)
  },
  {
    path: 'cvscreen',
    loadChildren: () => import('./components/cvscreen/cvscreen.module').then( m => m.CVScreenPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
