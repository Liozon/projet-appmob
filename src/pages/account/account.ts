import { NavController, App, DateTime } from 'ionic-angular';
import { Component } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';
import { StartPage } from '../start/start';
import { LoginPage } from '../login/login';
import { EditAccountPage } from '../account/editAccount';
import { Subscription } from 'rxjs';

@Component({
    selector: 'page-account',
    templateUrl: 'account.html',
})

export class AccountPage {

    authProvider: AuthProvider;
    username: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    tripsCount: Number;
    userSubscription: Subscription;

    constructor(private auth: AuthProvider, public navCtrl: NavController, private app: App) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AccountPage');
    
        this.userSubscription = this.auth.getUser().subscribe(user => {
            if (user) {
                this.username = user.name;
                this.createdAt = user.createdAt;
                this.tripsCount = user.tripsCount;
                this.updatedAt = user.updatedAt;
                this.navCtrl.parent.select(3);
            } else {
                this.navCtrl.push(LoginPage);
            }
        });
        this.navCtrl.parent.select(3);
    }

    ionViewDidLeave() {
        this.userSubscription.unsubscribe();
    }

    editUser() {
        this.navCtrl.push(EditAccountPage);
    }

    tripPage(username) {
        this.navCtrl.parent.select(0, {
            params:{
                search: username
            }
        });
        console.log(username);
    }

    placePage() {
        this.navCtrl.parent.select(1);
    }

    logout() {
        this.auth.logOut();
        this.app.getRootNav().setRoot(StartPage);
    }
}