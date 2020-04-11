

import { FolderPageRoutingModule } from './folder-routing.module';
import { FolderPage } from './folder.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import{ CvLogoComponent} from '../components/cv-logo/cv-logo.component';
import {CvCasosComponent} from '../components/cv-casos/cv-casos.component';
import {CvCiudadComponent} from '../components/cv-ciudad/cv-ciudad.component';
import{CvScreenComponent} from '../components/cv-screen/cv-screen.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: FolderPage
      }
    ])
  ],
  declarations: [FolderPage,CvLogoComponent,CvCasosComponent,CvCiudadComponent,CvScreenComponent]
})
export class FolderPageModule {}
