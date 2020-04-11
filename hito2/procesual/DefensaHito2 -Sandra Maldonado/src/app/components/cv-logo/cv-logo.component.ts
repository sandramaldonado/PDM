import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cv-logo',
  templateUrl: './cv-logo.component.html',
  styleUrls: ['./cv-logo.component.scss'],
})
export class CvLogoComponent implements OnInit {


  @Input('link') link:string;
  constructor() { }

  ngOnInit() {}

}
