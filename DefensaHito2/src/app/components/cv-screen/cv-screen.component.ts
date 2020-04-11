import { Component, OnInit } from '@angular/core';
import { CvCiudadComponent } from '../../components/cv-ciudad/cv-ciudad.component'
import { CvCasosComponent } from '../cv-casos/cv-casos.component';

@Component({
  selector: 'app-cv-screen',
  templateUrl: './cv-screen.component.html',
  styleUrls: ['./cv-screen.component.scss'],
})
export class CvScreenComponent implements OnInit {

  public departaments = {};
  private departamentos:[CvCasosComponent];
  constructor() { }

  ngOnInit() {}


  calcularMayor():void
  {
    const nodeItems = Array.from(document.getElementsByClassName('ciudad'));

    for (const c of nodeItems) {
    
      // let  ciudad=c.getElementsByTagName('h1')[0].innerText;
      // console.log(document.getElementById(ciudad)); 

      let  ciudad=c.getElementsByTagName('app-cvcasos')[0].getElementsByTagName('ion-row');

      let casosConfirmados  = ciudad[0].getElementsByTagName('input');
      let casosSospechosos  = ciudad[1].getElementsByTagName('input');
      
      let departamento = casosConfirmados[0].getAttribute('id');
      let numeroDeCasosConfirmados = casosConfirmados[0].value;
      let numeroDeCasosSospechosos = casosSospechosos[0].value; 

      console.log(departamento)
      var num = [];
      num.push(casosConfirmados[0].value);


      console.log(numeroDeCasosConfirmados)
      console.log(numeroDeCasosSospechosos)
      
    }
    Math.max.apply(Math, num);
    console.log("el mayor es ");
  }

}