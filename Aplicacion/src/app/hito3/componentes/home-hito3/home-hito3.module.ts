import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeHito3PageRoutingModule } from './home-hito3-routing.module';

import { HomeHito3Page } from './home-hito3.page';
import {Defensahito3Component} from '../defensahito3/defensahito3.component';
import {FirebaseComponent} from '../firebase/firebase.component';
import {Loginhito3Component} from '../loginhito3/loginhito3.component';
import {PdmComponent} from '../pdm/pdm.component';
import {ButtonsComponent}from '../buttons/buttons.component';
import {DescripcionComponent} from '../descripcion/descripcion.component';
import {ButtonPrevComponent} from '../button-prev/button-prev.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeHito3PageRoutingModule
  ],
  declarations: [
    HomeHito3Page, 
    Defensahito3Component, 
    FirebaseComponent,
    Loginhito3Component,
    PdmComponent,ButtonsComponent,
    DescripcionComponent,
    ButtonPrevComponent
    ]
})
export class HomeHito3PageModule {}
