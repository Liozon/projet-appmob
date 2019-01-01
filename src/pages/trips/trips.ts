import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';

/**
 * Generated class for the TripsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-trip',
  templateUrl: 'trips.html',
})
export class TripsPage {

  constructor(private auth: AuthProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TripsPage');
  }

  // TODO: add a method to log out.
  logIn() {
    this.auth.logOut();
  }

  // TODO: add a method to log out.
  logOut() {
    this.auth.logOut();
  }

  addTrip(){}

}
