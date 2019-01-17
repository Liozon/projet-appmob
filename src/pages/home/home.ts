import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';

import { TripsPage } from '../trips/trips';
import { PlacesPage } from '../places/places';
import { UsersPage } from '../users/users';
import { AccountPage } from '../account/account';
import { StartPage } from '../start/start';
import { LoginPage } from '../login/login';
import { AuthProvider } from '../../providers/auth/auth';
import { Subscription } from 'rxjs';

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

  username: string;

  userSubscription: Subscription;

  constructor(private auth: AuthProvider, public navCtrl: NavController, np: NavParams, private app: App) {
    this.setindex = np.get('opentab');
    this.tabs = [
      { title: 'Trips', icon: 'map', component: TripsPage },
      { title: 'Places', icon: 'pin', component: PlacesPage },
      { title: 'Users', icon: 'people', component: UsersPage },
      { title: 'Account', icon: 'home', component: AccountPage }
    ];
  }

  ionViewDidLoad() {
    this.userSubscription = this.auth.getUser().subscribe(user => {
      if (user) {
        this.username = user.name;
      }
    })
  }

  ionViewDidLeave() {
    this.userSubscription.unsubscribe();
  }

  returnToStart() {
    this.navCtrl.setRoot(StartPage);
  }

  logIn() {
    this.navCtrl.push(LoginPage);
  }

  logOut() {
    this.auth.logOut();
    this.app.getRootNav().setRoot(StartPage);
  }

}
