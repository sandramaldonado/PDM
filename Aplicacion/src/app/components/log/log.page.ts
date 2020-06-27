import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Usuario} from '../../Modelos/Usuario';
import {UsuarioService} from '../../servicios/usuario.service';

import { AuthService } from '../../servicios/auth.service';
import { Router, Params } from '@angular/router';

import {AppComponent} from  '../../../app/app.component';
@Component({
  selector: 'app-log',
  templateUrl: './log.page.html',
  styleUrls: ['./log.page.scss'],
})
export class LogPage implements OnInit {
  public username;
  public password;
  public CurrentUser;
  constructor(public usuarioService : UsuarioService, public authService: AuthService,
    private router: Router,
    public tipousuario: AppComponent) { }

  ngOnInit() {
  }

  login(loginForm: NgForm){
    
      this.usuarioService.login(loginForm.value);
  }

  tryLogin(){
    this.username = this.username;
    this.password = this.password;

    console.log(this.username)
    console.log(this.password)
    var err;

    this.authService.SignIn(this.username, this.password)
    .then((res)=>{
      this.router.navigate(['/home']);
      this.CurrentUser = "publico";
      this.tipousuario.TipoUsuario(this.CurrentUser);  
      console.log("LOGEADO CORRECTAMENTE")
    })
    .catch((err)=>console.log(err)
        
    );

  }

  registrarse()
  {
    this.router.navigate(['/registrarse']);
  }

}
