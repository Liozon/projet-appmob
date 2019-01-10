import { Component } from '@angular/core';
import { NavController, NavParams, GESTURE_REFRESHER } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AuthProvider } from '../../providers/auth/auth';
import { AuthRequest } from '../../models/auth-request';
import { config } from '../../app/config';
import { HomePage } from '../home/home';
import { StartPage } from '../start/start';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-account',
    templateUrl: 'account.html',
})

export class AccountPage {

    authProvider : AuthProvider;

    constructor(private auth: AuthProvider, public http: HttpClient, public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        const url = `${config.apiUrl}/trips`;
        this.http.get(url).subscribe(trips => {
            console.log(`Trips loaded`, trips);
        });
        console.log('ionViewDidLoad AccountPage');
    }
    
    tripPage() {
        this.navCtrl.setRoot(HomePage, { opentab: 0 });
    }

    placePage() {
        this.navCtrl.setRoot(HomePage, { opentab: 1 });
    }

    logout() {
        this.navCtrl.setRoot(StartPage);
    }

}
