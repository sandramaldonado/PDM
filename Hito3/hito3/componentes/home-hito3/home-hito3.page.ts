import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-home-hito3',
  templateUrl: './home-hito3.page.html',
  styleUrls: ['./home-hito3.page.scss'],
})
export class HomeHito3Page implements OnInit {
  @ViewChild('slides', {static: false}) slides: IonSlides;
  constructor() { }

  ngOnInit() {
  }

  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }

}
