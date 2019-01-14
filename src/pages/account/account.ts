import { NavController, NavParams, App, Platform, DateTime } from 'ionic-angular';
import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthProvider } from '../../providers/auth/auth';
import { AuthRequest } from '../../models/auth-request';
import { config } from '../../app/config';
import { HomePage } from '../home/home';
import { StartPage } from '../start/start';
import { LoginPage } from '../login/login';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UsersPage } from '../users/users';
import { User } from '../../models/user';

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
    username : string;
    createdAt: DateTime;
    updatedAt: DateTime;
    tripsCount: Number;
    //placesCount: number;

    constructor(private auth: AuthProvider, public http: HttpClient, public navCtrl: NavController, public navParams: NavParams, private app: App, 
        platform: Platform,
        statusBar: StatusBar,
        splashScreen: SplashScreen) {
        this.auth.isAuthenticated().subscribe(authenticated => {
            if (authenticated) {
                //this.navCtrl.setRoot(HomePage, { opentab: 3 });
                this.navCtrl.parent.select(3);
            } else {
                this.navCtrl.push(LoginPage);
            }
        });
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }

    ionViewDidLoad() {
        const url = `${config.apiUrl}/trips`;
        this.http.get(url).subscribe(trips => {
            console.log(`Trips loaded`, trips);
        });

        this.auth.getUser().subscribe(user => {
        this.username = user.name;
        this.createdAt = user.createdAt;
        this.tripsCount = user.tripsCount;
        console.log(user);
        });

        console.log('ionViewDidLoad AccountPage');
    } 
    
    tripPage() {
        this.navCtrl.parent.select(0);
    }

    placePage() {
        this.navCtrl.parent.select(1);
    }

    logout() {
        this.auth.logOut();
        this.app.getRootNav().setRoot(StartPage);
        /*
        this.app.getRootNav().setRoot(StartPage).then(res => {
            this.auth.logOut();
        });
        */
    }
}
