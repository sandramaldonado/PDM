import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-cvscreen',
  templateUrl: './cvscreen.page.html',
  styleUrls: ['./cvscreen.page.scss'],
})
export class CVScreenPage implements OnInit {

  n1
 n2
 n3
 n4
 n5
 n6
  ngOnInit() {
  }
   cal(){
    var nu1 = this.n1;
     var nu2 = this.n2;
     var nu3 = this.n3;
     var nu4 = this.n4;
     var nu5 = this.n5;
     var nu6 = this.n6;
     //var resul = this.resul
     //this.resul = (usuario+pass);
     if
     (nu1<nu3 && nu1<nu5)
     {
       console.log('hay mas casos en cochabamba');
     }
     else if(nu3<nu1 && nu3<nu5){
      console.log('hay mas casos en Santa Cruz');
     }
     else if(nu5<nu1 && nu5<nu3){
      console.log('hay mas casos en La Paz');
     }
   }constructor() { }

  

  buscar(CasosForm: NgForm){

  }

}
