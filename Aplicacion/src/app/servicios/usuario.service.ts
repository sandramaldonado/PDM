import { Injectable } from '@angular/core';
import {Usuario} from '../../app/Modelos/Usuario';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  login(usuario: Usuario){

    var username = usuario.username;
    var password = usuario.password;

    console.log(username ); 
    console.log(password)

  }
}
