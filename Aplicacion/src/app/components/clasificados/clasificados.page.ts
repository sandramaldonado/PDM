import { Component, OnInit } from '@angular/core';
import {Anuncio} from '../../Modelos/Anuncio';
import {Categoria}from '../../Modelos/Categoria';
import {AnuncioService} from '../../servicios/anuncio.service';
import { of } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clasificados',
  templateUrl: './clasificados.page.html',
  styleUrls: ['./clasificados.page.scss'],
})
export class ClasificadosPage implements OnInit {
  selectedValue: string;
  anuncioList: Anuncio[];
  anuncio: any[];
  categorias = ['Todos', 'Empleos', 'Donaciones'];
  constructor(private anuncioService: AnuncioService) { }

  ngOnInit() {
    return this.anuncioService.getAnuncios().snapshotChanges().subscribe(item => {
      this.anuncioList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.anuncioList.push(x as Anuncio);
      });
    });

    
}

onChange($event){
  console.log($event.target.value);
  }

onSelect($event){
      console.log($event.target.value);
      let query = null;
      if($event.target.value == "Todos")
        query = this.anuncioService.getAnuncios();
      else
        query = this.anuncioService.getAnuncioFiltro($event.target.value);
      query.subscribe( anuncio => {this.anuncio = anuncio})
}


}


