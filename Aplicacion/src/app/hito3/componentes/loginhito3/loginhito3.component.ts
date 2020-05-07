import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../servicios/auth.service';
import { Router, Params } from '@angular/router';
@Component({
  selector: 'app-loginhito3',
  templateUrl: './loginhito3.component.html',
  styleUrls: ['./loginhito3.component.scss'],
})
export class Loginhito3Component implements OnInit {
  public username;
  public password;
  
  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {}

  login(){
    this.username = this.username;
    this.password = this.password;

    console.log(this.username)
    console.log(this.password)
    var err;

    this.authService.SignIn(this.username, this.password)
    .then((res)=>{
      this.router.navigate(['/my-app']);
      console.log("LOGEADO CORRECTAMENTE")
    })
    .catch((err)=>console.log(err)
        
    );

  }

}
