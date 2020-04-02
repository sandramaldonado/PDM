import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CVScreenPageRoutingModule } from './cvscreen-routing.module';

import { CVScreenPage } from './cvscreen.page';
import {CVlogoComponent} from '../cvlogo/cvlogo.component';
import { CVCiudadPage } from '../cvciudad/cvciudad.page';
import { CVCasosPage } from '../cvcasos/cvcasos.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CVScreenPageRoutingModule
  ],
  declarations: [CVScreenPage, CVlogoComponent, CVCiudadPage, CVCasosPage]
})
export class CVScreenPageModule {}
