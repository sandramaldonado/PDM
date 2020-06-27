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
    this.anuncioService.getAnuncios().subscribe(data => {
      this.anuncioList = data.map(e => {
        return {
          imagen: e.payload.doc.data()['imagen'],
          titulo: e.payload.doc.data()['titulo'],
          categoria: e.payload.doc.data()['categoria'],
          descripcion: e.payload.doc.data()['descripcion'],
          telefono: e.payload.doc.data()['telefono']

        } as Anuncio;
      })
    })

    
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


