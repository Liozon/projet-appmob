import { NavController, NavParams, App, Platform, DateTime, LoadingController } from 'ionic-angular';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthProvider } from '../../providers/auth/auth';
import { StartPage } from '../start/start';
import { LoginPage } from '../login/login';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EditAccountPage } from '../account/editAccount';

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
    //placesCount: Number;

    constructor(private auth: AuthProvider, public http: HttpClient, public navCtrl: NavController, public navParams: NavParams, private app: App,
        platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public loadingCtrl: LoadingController) {
        this.auth.isAuthenticated().subscribe(authenticated => {
            if (authenticated) {
                //this.navCtrl.setRoot(HomePage, { opentab: 3 });
                this.auth.getUser().subscribe(user => {
                    this.username = user.name;
                    this.createdAt = user.createdAt;
                    this.tripsCount = user.tripsCount;
                    this.updatedAt = user.updatedAt;
                    console.log(user);
                });
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
        /*
        const url = `${config.apiUrl}/users`;
        this.http.get(url).subscribe(users => {
            console.log(`User loaded`, users);
        });
        */

        

        console.log('ionViewDidLoad AccountPage');
    }

    editUser() {
        this.navCtrl.push(EditAccountPage);
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

    /*
    presentLoading() {
        const loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
    }
    */


}
