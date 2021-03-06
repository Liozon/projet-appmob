import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { Subscription } from 'rxjs';

@Component({
    selector: 'page-start',
    templateUrl: 'start.html',
})

export class StartPage {

    username: string;
    userSubscription: Subscription;

    constructor(private auth: AuthProvider, public navCtrl: NavController) {
    }

    ionViewDidLoad() {
        this.userSubscription = this.auth.getUser().subscribe(user => {
            if (user) {
                this.username = user.name;
            }
        })
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