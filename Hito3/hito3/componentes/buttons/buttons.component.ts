import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import {HomeHito3Page} from '../home-hito3/home-hito3.page'
@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent implements OnInit {
  @Input('title') departament:string;
  
  constructor(public slider: HomeHito3Page) { }
  
  ngOnInit() {}

  nextP() {
    this.slider.next();
    
  }

  prev() {
    this.slider.prev();
  }

}
