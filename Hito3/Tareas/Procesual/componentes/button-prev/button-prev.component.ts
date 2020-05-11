import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import {HomeHito3Page} from '../home-hito3/home-hito3.page'
@Component({
  selector: 'app-button-prev',
  templateUrl: './button-prev.component.html',
  styleUrls: ['./button-prev.component.scss'],
})
export class ButtonPrevComponent implements OnInit {
  @Input('title') departament:string;
  constructor(public slider: HomeHito3Page) { }

  ngOnInit() {}

  prev() {
    this.slider.prev();
  }

}
