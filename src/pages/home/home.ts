import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TripsPage } from '../trips/trips';
import { PlacesPage } from '../places/places';
import { UsersPage } from '../users/users';
import { AccountPage } from '../account/account';

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

  constructor(public navCtrl: NavController) {
    this.tabs = [
      { title: 'Trips', icon: 'map', component: TripsPage },
      { title: 'Places', icon: 'pin', component: PlacesPage },
      { title: 'Users', icon: 'people', component: UsersPage },
      { title: 'Account', icon: 'home', component: AccountPage }
    ];
  }
}
