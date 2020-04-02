import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CVLogoPageRoutingModule } from './cvlogo-routing.module';

import { CVLogoPage } from './cvlogo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CVLogoPageRoutingModule
  ],
  declarations: [CVLogoPage]
})
export class CVLogoPageModule {}
