import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { User } from '../../models/user';

@Component({
    selector: 'page-userAccount',
    templateUrl: 'userAccount.html',
})

export class UserAccountPage {

    user: User;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad UserAccountPage');
        this.user = this.navParams.get("user");
    }

    showTrips() {
        this.navCtrl.parent.select(0);
    }
}