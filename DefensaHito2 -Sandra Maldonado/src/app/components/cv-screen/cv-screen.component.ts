import { Component, OnInit } from '@angular/core';
import { CvciudadComponent } from '../cvciudad/cvciudad.component';
import { CvcasosComponent } from '../cvcasos/cvcasos.component';

@Component({
  selector: 'app-cv-screen',
  templateUrl: './cv-screen.component.html',
  styleUrls: ['./cv-screen.component.scss'],
})
export class CvScreenComponent implements OnInit {

  public departaments = {};
  private departamentos:[CvcasosComponent];
  public buscar;
  
  constructor() { }

  ngOnInit() {}


  calcularMayor():void
  {
    this.buscar = this.buscar;
    console.log(this.buscar)
    if(this.buscar == 'sospechosos')
    {
      const nodeItems = Array.from(document.getElementsByClassName('ciudad'));

      for (const c of nodeItems) {
        let  ciudad=c.getElementsByTagName('app-cvcasos')[0].getElementsByTagName('ion-row');

        let casosConfirmados  = ciudad[0].getElementsByTagName('input');
        let casosSospechosos  = ciudad[1].getElementsByTagName('input');
        
        let departamento = casosConfirmados[0].getAttribute('id');
        let numeroDeCasosConfirmados = casosConfirmados[0].value;
        let numeroDeCasosSospechosos = casosSospechosos[0].value; 

        console.log(departamento)
        var numSospechosos = [];
        numSospechosos.push(casosSospechosos[0].value);

        console.log(numeroDeCasosConfirmados)
        console.log(numeroDeCasosSospechosos)
        
      }
      Math.max.apply(Math, numSospechosos);
      console.log(num);
      console.log("el mayor es " + num);
    }
    else(this.buscar == "confirmados")
    {
      const nodeItems = Array.from(document.getElementsByClassName('ciudad'));

      for (const c of nodeItems) {
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
      console.log(num);
      console.log("el mayor es " + num);
    }
    
  }



}
