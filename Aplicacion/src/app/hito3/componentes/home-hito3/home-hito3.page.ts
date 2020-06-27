import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { AnuncioService } from '../../../servicios/anuncio.service';
import {environment} from '../../../../environments/environment'

export interface Datos{
    appID: string;
    nameApp: string;
    userID: string;
}

@Component({
  selector: 'app-home-hito3',
  templateUrl: './home-hito3.page.html',
  styleUrls: ['./home-hito3.page.scss'],
})
export class HomeHito3Page implements OnInit {
  nombre
  datos : Datos



 
  @ViewChild('slides', {static: false}) slides: IonSlides;
  constructor(public anuncioService : AnuncioService) { 
    
    this.datos = {} as Datos;
  }
  
  ngOnInit() {
  }

  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }

  subir()
  {
    this.datos.appID = environment.firebaseConfig.appId;
    this.datos.userID = "sandrita.isabel@hotmail.com";
    this.anuncioService.insertar(this.datos.nameApp, this.datos);
    console.log("sis")
  }
}
