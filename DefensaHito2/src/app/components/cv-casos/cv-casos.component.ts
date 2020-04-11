import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cv-casos',
  templateUrl: './cv-casos.component.html',
  styleUrls: ['./cv-casos.component.scss'],
})
export class CvCasosComponent implements OnInit {

  @Input('departament') departament:string;
  constructor() { }


  ngOnInit() {}

}
