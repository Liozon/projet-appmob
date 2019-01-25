import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthProvider } from '../../providers/auth/auth';
import { DateTime, NavController, App, AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AuthRequest } from '../../models/auth-request';
import { StartPage } from '../start/start';
import { User } from '../../models/user';
import { Subscription } from 'rxjs';
import { HomePage } from '../home/home';

@Component({
    selector: 'page-editAccount',
    templateUrl: 'editAccount.html',
})

export class EditAccountPage {

    authProvider: AuthProvider;
    userMod: User;
    editError: boolean;
    username: string;
    userid: string;
    createdAt: DateTime;
    updatedAt: DateTime;

    userSubscription: Subscription;

    @ViewChild(NgForm)
    form: NgForm;

    constructor(private auth: AuthProvider, private navCtrl: NavController, public http: HttpClient, private app: App, public alertCtrl: AlertController) {
        this.userMod = new User();
    }

    ionViewDidLoad() {
        this.userSubscription = this.auth.getUser().subscribe(user => {
            if (user) {
                this.username = user.name;
                this.userid = user.id;
                this.createdAt = user.createdAt;
                this.updatedAt = user.updatedAt;
            }
        })
    }

    ionViewDidLeave() {
        this.userSubscription.unsubscribe();
    }

    /**
   * Called when the Edit User form is submitted.
   */
    onSubmit($event) {

        // Prevent default HTML form behavior.
        $event.preventDefault();

        // Do not do anything if the form is invalid.
        if (this.form.invalid) {
            return;
        }

        // Hide any previous edit error.
        this.editError = false;

        // Perform the authentication request to the API.
        this.auth.editUser(this.userid, this.userMod).subscribe(() => this.accountPage(), err => {
            this.editError = true;
            console.warn(`Edit User failed: ${err.message}`);
        });

    }

    deleteUser() {
        const confirm = this.alertCtrl.create({
            title: 'Delete Account?',
            message: 'Do you want to delete your account?',
            buttons: [
                {
                    text: 'Yes',
                    handler: () => {
                        this.auth.deleteUser(this.userid).subscribe();
                        this.auth.logOut();
                        this.app.getRootNav().setRoot(StartPage);
                        console.log('Do you want to delete your account? - Yes clicked');
                    }
                },
                {
                    text: 'No',
                    handler: () => {
                        console.log('Do you want to delete your account? - No clicked');
                    }
                }
            ]
        });
        confirm.present();
    }

    accountPage() {
        this.navCtrl.setRoot(HomePage, { opentab: 3 });
    }
}