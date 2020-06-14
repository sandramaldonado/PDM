import { Component, OnInit, ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  @ViewChild(Slides)slides: Slides;

  public next(){
    this.slides.slideNext();
  }

  public prev(){
    this.slides.slidePrev();
  }

}
