import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Defensahito3Component} from '../defensahito3/defensahito3.component';
import {FirebaseComponent}from '../firebase/firebase.component';
import {LoginComponent} from '../login/login.component';
import {PdmComponent} from '../pdm/pdm.component';
import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, Defensahito3Component, FirebaseComponent, LoginComponent, PdmComponent]
})
export class HomePageModule {

  
}
