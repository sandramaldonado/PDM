import { Injectable } from '@angular/core';
import{AngularFireDatabase, AngularFireList,} from 'angularfire2/database';
import { of } from 'rxjs';
import { Observable } from 'rxjs';

import {Anuncio} from '../Modelos/Anuncio';
@Injectable({
  providedIn: 'root'
})
export class AnuncioService {
  anuncio: Observable<any[]>;
  anunciosList: AngularFireList<any>;
  selectedAnuncio: Anuncio = new Anuncio();
  
  constructor(private firebase: AngularFireDatabase) { }

  getAnuncios(){
    return this.anunciosList = this.firebase.list('anuncios');
  }
 

  insertAnuncio(anuncio: Anuncio){
    this.anunciosList.push({
      imagen: anuncio.imagen,
      titulo: anuncio.titulo,
      categoria: anuncio.categoria,
      descripcion: anuncio.descripcion,
      telefono: anuncio.telefono
    }); }

  updateAnuncio(anuncio: Anuncio){
    this.anunciosList.update(anuncio.$key,{
      imagen: anuncio.imagen,
      titulo: anuncio.titulo,
      categoria: anuncio.categoria,
      descripcion: anuncio.descripcion,
      telefono: anuncio.telefono

    });
  }

  deleteAnuncio($key: string){
    this.anunciosList.remove($key);

  }

  getAnuncioFiltro(filtro: string): Observable<any> {
    this.anunciosList = this.firebase.list('/anuncios', ref => 
    ref.orderByChild('categoria').equalTo(filtro))
    return of(this.anunciosList);
  }
}
