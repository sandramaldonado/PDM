import { Component, OnInit } from '@angular/core';
import {Anuncio} from '../../Modelos/Anuncio';
import {Categoria}from '../../Modelos/Categoria';
import {AnuncioService} from '../../servicios/anuncio.service';
@Component({
  selector: 'app-clasificados',
  templateUrl: './clasificados.page.html',
  styleUrls: ['./clasificados.page.scss'],
})
export class ClasificadosPage implements OnInit {
  selectedValue: string;
  anuncioList: Anuncio[];

  public categorias: Categoria[] =[{id:1, name:"Donaciones"}, {id: 2, name:"Trabajos"}, {id:3, name:"Se Necesita"}]
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

}
