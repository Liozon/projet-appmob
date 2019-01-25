import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthProvider } from '../providers/auth/auth';
import { StartPage } from '../pages/start/start';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  
  rootPage:any = StartPage;
   
  constructor(private auth: AuthProvider, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
      
      /*
    this.auth.isAuthenticated().subscribe(authenticated => {
      if (authenticated) {
        this.rootPage = StartPage;
      } else {
        //this.rootPage = LoginPage;
      }
    });*/

    /*
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    */
  }
  
}

