import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router, Params } from '@angular/router';
import {ToastController} from '@ionic/angular';
import validator from 'validator';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})

export class RegistrarsePage implements OnInit {

  loginForm = new FormGroup({
    userEmail: new FormControl(''),
    userPassword: new FormControl(''),
    });
    
    loginFormValidator = {
    userEmail: {
    empty: '',
    email: '',
    },
    userPassword: {
    empty: '',
    }
    };

  public username;
  public password;
  constructor(public authService: AuthService, private router: Router, public toastController:ToastController) { }

  ngOnInit() {
  }

  async registrar(){
    this.username = this.username;
    this.password = this.password;

    console.log(this.username)
    console.log(this.password)
    var err;

    this.authService.RegisterUser(this.username, this.password)
    .then((res)=>{
      this.router.navigate(['/log']); 
      console.log("REGISTRADO CORRECTAMENTE")
    })
    .catch((err)=>console.log(err)
        
    );

    const toast = await this.toastController.create({
      message: 'REGISTRADO CORRECTAMENTE.',
      duration: 2000
    });
    toast.present();
  }

  formValidator(): boolean {
    if (validator.isEmpty(this.loginForm.value.userEmail)) {
    this.loginFormValidator.userEmail.empty = 'La dirección de correo es requerido';
    return false;
    } else {
    this.loginFormValidator.userEmail.empty = '';
    }
    if (!validator.isEmail(this.loginForm.value.userEmail)) {
    this.loginFormValidator.userEmail.email = 'Ingrese una dirección de correo válida';
    return false;
    } else {
    this.loginFormValidator.userEmail.email = '';
    }
    if (validator.isEmpty(this.loginForm.value.userPassword)) {
    this.loginFormValidator.userPassword.empty = 'La contraseña es requerido';
    return false;
    } else {
    this.loginFormValidator.userPassword.empty = '';
    }
    return true;
    }
    
    onSubmit() {
    if (this.formValidator()) {
    console.log('Formulario Validado');
    }
    }
    
  

}
