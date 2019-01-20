import { NavController, NavParams, App, LoadingController } from 'ionic-angular';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    
        showTrips() {
            this.navCtrl.parent.select(0);
        }

}