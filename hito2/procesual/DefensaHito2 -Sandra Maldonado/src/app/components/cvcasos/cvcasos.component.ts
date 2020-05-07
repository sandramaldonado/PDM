import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cvcasos',
  templateUrl: './cvcasos.component.html',
  styleUrls: ['./cvcasos.component.scss'],
})
export class CvcasosComponent implements OnInit {

  @Input('title') departament:string;
  constructor() { }

  ngOnInit() {}

}
