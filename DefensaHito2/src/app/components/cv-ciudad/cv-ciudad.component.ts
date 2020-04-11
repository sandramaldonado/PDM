import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-cv-ciudad',
  templateUrl: './cv-ciudad.component.html',
  styleUrls: ['./cv-ciudad.component.scss'],
})
export class CvCiudadComponent implements OnInit {

  @Input('title') title:string;
  constructor() { }

  ngOnInit() {}

}
