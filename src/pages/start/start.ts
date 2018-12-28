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


export interface StartPageTab {
    title: string;
    icon: string;
    component: Function;
}

@Component({
    selector: 'page-start',
    templateUrl: 'start.html',
})

export class StartPage {

    // list of tabs
    bigTabs: StartPageTab[];

    constructor(private auth: AuthProvider, public http: HttpClient, public navCtrl: NavController, public navParams: NavParams) {
        this.bigTabs = [
            { title: 'Trips', icon: 'map', component: TripsPage },
            { title: 'Places', icon: 'pin', component: PlacesPage },
            { title: 'Users', icon: 'people', component: UsersPage },
            { title: 'Account', icon: 'home', component: AccountPage }
        ];
    }

    ionViewDidLoad() {
        const url = `${config.apiUrl}/trips`;
        this.http.get(url).subscribe(trips => {
            console.log(`Trips loaded`, trips);
        });
        console.log('ionViewDidLoad AccountPage');
    }

    tripPage() {
        this.navCtrl.setRoot(TripsPage);
    }

    placePage() {
        this.navCtrl.setRoot(PlacesPage);
    }

    userPage() {
        this.navCtrl.setRoot(UsersPage);
    }

    accountPage() {
        this.navCtrl.setRoot(AccountPage);
    }

    signUpPage() {
        this.navCtrl.setRoot(TripsPage);
    }

    logInPage() {
        this.navCtrl.setRoot(LoginPage);
    }
}