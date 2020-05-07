import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public isLogged :boolean = false;
  public Tipo_usuario: String;
  public appPages = [
    {
      title: 'home',
      url: '/home',
      icon: 'warning'
    },
  
    {
      title: 'Login',
      url: '/log',
      icon: 'warning'
    },
    {
      title: 'Clasificados',
      url: '/clasificados',
      icon: 'warning'
    },

    {
      title: 'registrarse',
      url: '/registrarse',
      icon: 'warning'
    },

    {
      title: 'Añadir Anuncio',
      url: '/add-anuncio',
      icon: 'warning'
    },

    

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  TipoUsuario(tipo: string){
    console.log("tipo:" + tipo); 
    this.isLogged = true;
    this.Tipo_usuario = tipo;
    console.log("tipito:" + this.Tipo_usuario);
  }
}
