import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import{ CvLogoComponent} from '../components/cv-logo/cv-logo.component';
import { HomePage } from './home.page';
import {CvcasosComponent} from '../components/cvcasos/cvcasos.component';
import {CvciudadComponent} from '../components/cvciudad/cvciudad.component';
import{CvScreenComponent} from '../components/cv-screen/cv-screen.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage,CvLogoComponent,CvcasosComponent,CvciudadComponent,CvScreenComponent]
})
export class HomePageModule {}
