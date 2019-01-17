import { NavController, NavParams, App, Platform, DateTime, LoadingController } from 'ionic-angular';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthProvider } from '../../providers/auth/auth';
import { StartPage } from '../start/start';
import { LoginPage } from '../login/login';
import { Subscription } from 'rxjs';
import { User } from '../../models/user';

@Component({
    selector: 'page-userAccount',
    templateUrl: 'userAccount.html',
})

export class UserAccountPage {
    user: User;

    constructor( public http: HttpClient, public navCtrl: NavController, public navParams: NavParams, private app: App,
        public loadingCtrl: LoadingController){

        }

        ionViewDidLoad() {
            console.log('ionViewDidLoad UserAccountPage');
            this.user = this.navParams.get("user");
        }
    
        tripPage() {
            this.navCtrl.parent.select(0);
        }
    
        placePage() {
            this.navCtrl.parent.select(1);
        }

}