import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAnuncioPageRoutingModule } from './add-anuncio-routing.module';

import { AddAnuncioPage } from './add-anuncio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAnuncioPageRoutingModule
  ],
  declarations: [AddAnuncioPage]
})
export class AddAnuncioPageModule {}
