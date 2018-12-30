import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TripsPage } from '../trips/trips';
import { PlacesPage } from '../places/places';
import { UsersPage } from '../users/users';
import { AccountPage } from '../account/account';
import { StartPage } from '../start/start';
import { LoginPage } from '../login/login';

export interface HomePageTab {
  title: string;
  icon: string;
  component: Function;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // list of tabs
  tabs: HomePageTab[];
  setindex: number;

  constructor(public navCtrl: NavController, np: NavParams) {
    this.setindex = np.get('opentab');
    this.tabs = [
      { title: 'Trips', icon: 'map', component: TripsPage },
      { title: 'Places', icon: 'pin', component: PlacesPage },
      { title: 'Users', icon: 'people', component: UsersPage },
      { title: 'Account', icon: 'home', component: AccountPage }
    ];
  }

  returnToStart() {
    this.navCtrl.setRoot(StartPage);
  }

  logIn() {
    this.navCtrl.push(LoginPage);
  }

}
