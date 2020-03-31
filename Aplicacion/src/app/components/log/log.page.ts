import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Usuario} from '../../Modelos/Usuario';
import {UsuarioService} from '../../servicios/usuario.service';
@Component({
  selector: 'app-log',
  templateUrl: './log.page.html',
  styleUrls: ['./log.page.scss'],
})
export class LogPage implements OnInit {
  usuario;
  pass;
  constructor(public usuarioService : UsuarioService) { }

  ngOnInit() {
  }

  login(loginForm: NgForm){
    
      this.usuarioService.login(loginForm.value);
    

  }

}
