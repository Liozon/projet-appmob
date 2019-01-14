import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AuthProvider } from '../../providers/auth/auth';
import { config } from '../../app/config';

import { TripsPage } from '../trips/trips';
import { PlacesPage } from '../places/places';
import { UsersPage } from '../users/users';
import { AccountPage } from '../account/account';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';

@Component({
    selector: 'page-start',
    templateUrl: 'start.html',
})

export class StartPage {

    constructor(private auth: AuthProvider, public http: HttpClient, public navCtrl: NavController, public navParams: NavParams) {

    }

    ionViewDidLoad() {
        /*
        const url = `${config.apiUrl}/trips`;
        this.http.get(url).subscribe(trips => {
            console.log(`StartPage loaded`, trips);
        });
        */
        console.log('ionViewDidLoad StartPage');
    }

    tripPage() {
        this.navCtrl.setRoot(HomePage, { opentab: 0 });
    }

    placePage() {
        this.navCtrl.setRoot(HomePage, { opentab: 1 });
    }

    userPage() {
        this.navCtrl.setRoot(HomePage, { opentab: 2 });
    }

    accountPage() {
        this.navCtrl.setRoot(HomePage, { opentab: 3 });
    }

    signUpPage() {
        this.navCtrl.push(SignupPage);
    }

    logInPage() {
        this.navCtrl.push(LoginPage);
    }
}