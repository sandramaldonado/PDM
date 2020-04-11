import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cvciudad',
  templateUrl: './cvciudad.component.html',
  styleUrls: ['./cvciudad.component.scss'],
})
export class CvciudadComponent implements OnInit {

  @Input('title') title:string;
  constructor() { }

  ngOnInit() {}

}
