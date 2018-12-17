import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TripsPage } from '../pages/trips/trips';
import { PlacesPage } from '../pages/places/places';
import { UsersPage } from '../pages/users/users';
import { AccountPage } from '../pages/account/account';
import { AuthProvider } from '../providers/auth/auth';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginPage } from '../pages/login/login';
import { AuthInterceptorProvider } from '../providers/auth-interceptor/auth-interceptor';
import { Geolocation } from '@ionic-native/geolocation';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { Camera } from '@ionic-native/camera';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TripsPage,
    PlacesPage,
    UsersPage,
    LoginPage,
    AccountPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot(),
    LeafletModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TripsPage,
    PlacesPage,
    UsersPage,
    LoginPage,
    AccountPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider,
    AuthInterceptorProvider,
    Geolocation,
    Camera,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorProvider, multi: true }
  ]
})
export class AppModule { }