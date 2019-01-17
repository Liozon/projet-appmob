import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { StartPage } from '../pages/start/start';
import { HomePage } from '../pages/home/home';
import { TripsPage } from '../pages/trips/trips';
import { PlacesPage } from '../pages/places/places';
import { UsersPage } from '../pages/users/users';
import { AccountPage } from '../pages/account/account';
import { AuthProvider } from '../providers/auth/auth';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { AuthInterceptorProvider } from '../providers/auth-interceptor/auth-interceptor';
import { Geolocation } from '@ionic-native/geolocation';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { Camera } from '@ionic-native/camera';
import { PictureProvider } from '../providers/picture/picture';
import { EditAccountPage } from '../pages/account/editAccount';
import { EditTripPage } from '../pages/trips/editTrip';
import { NewTripPage } from '../pages/trips/newTrip';
import { TripPage } from '../pages/trips/trip';
import { TripLocationPage } from '../pages/trips/tripLocation';
import { RestProvider } from '../providers/rest/rest';
import { EditPlacePage } from '../pages/places/editPlace';
import { NewPlacePage } from '../pages/places/newPlace';
import { PlacePage } from '../pages/places/place';
import { PlaceLocationPage } from '../pages/places/placeLocation';
import { UserAccountPage } from '../pages/users/userAccount';


@NgModule({
  declarations: [
    MyApp,
    StartPage,
    HomePage,
    TripsPage,
    EditTripPage,
    NewTripPage,
    TripPage,
    TripLocationPage,
    PlacesPage,
    EditPlacePage,
    NewPlacePage,
    PlacePage,
    PlaceLocationPage,
    UsersPage,
    LoginPage,
    SignupPage,
    AccountPage,
    EditAccountPage,
    UserAccountPage
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
    StartPage,
    HomePage,
    TripsPage,
    EditTripPage,
    NewTripPage,
    TripPage,
    TripLocationPage,
    PlacesPage,
    EditPlacePage,
    NewPlacePage,
    PlacePage,
    PlaceLocationPage,
    UsersPage,
    LoginPage,
    SignupPage,
    AccountPage,
    EditAccountPage,
    UserAccountPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider,
    Geolocation,
    Camera,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorProvider, multi: true },
    PictureProvider,
    RestProvider
  ]
})
export class AppModule { }