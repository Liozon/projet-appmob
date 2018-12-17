import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AuthProvider } from '../../providers/auth/auth';
import { config } from '../../app/config';

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

    constructor(private auth: AuthProvider, public http: HttpClient, public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        const url = `${config.apiUrl}/trips`;
        this.http.get(url).subscribe(trips => {
            console.log(`Trips loaded`, trips);
        });
        console.log('ionViewDidLoad AccountPage');
    }

}
