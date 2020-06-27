import { Injectable } from '@angular/core';
import{AngularFireDatabase, AngularFireList,} from 'angularfire2/database';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

import {Anuncio} from '../Modelos/Anuncio';
@Injectable({
  providedIn: 'root'
})
export class AnuncioService {
  anuncio: Observable<any[]>;
  anunciosList: AngularFireList<any>;
  selectedAnuncio: Anuncio = new Anuncio();
  
  constructor(private firebase: AngularFireDatabase, private firestore: AngularFirestore) { }

/*   getAnuncios(){
    return this.anunciosList = this.firebase.list('anuncios');
  } */

  getAnuncios(){
    return this.firestore.collection<any>('anuncios').snapshotChanges();
  }
 

/*   insertAnuncio(anuncio: Anuncio){
    this.anunciosList.push({
      imagen: anuncio.imagen,
      titulo: anuncio.titulo,
      categoria: anuncio.categoria,
      descripcion: anuncio.descripcion,
      telefono: anuncio.telefono
    }); } */


    createAnuncio(anuncio:Anuncio){
      return this.firestore.collection('anuncios').add(anuncio);
    }
  
  updateAnuncio(anuncio: Anuncio){
    this.anunciosList.update(anuncio.$key,{
      imagen: anuncio.imagen,
      titulo: anuncio.titulo,
      categoria: anuncio.categoria,
      descripcion: anuncio.descripcion,
      telefono: anuncio.telefono

    });
  }

  public insertar(nombre, datos)
  {
    return this.firestore.collection("Sandra_Collections").doc("GITHUB_APP").collection("IONIC").doc(nombre).set(datos);

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
