import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthProvider } from '../../providers/auth/auth';
import { DateTime, NavController, App, AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AuthRequest } from '../../models/auth-request';
import { StartPage } from '../start/start';

@Component({
    selector: 'page-editAccount',
    templateUrl: 'editAccount.html',
})

export class EditAccountPage {

    authProvider: AuthProvider;
    authRequest: AuthRequest;
    editError: boolean;
    username: string;
    userid: string;
    createdAt: DateTime;
    updatedAt: DateTime;

    @ViewChild(NgForm)
    form: NgForm;
    
    constructor(private auth: AuthProvider, private navCtrl: NavController, public http: HttpClient, private app: App, public alertCtrl: AlertController){
        this.authRequest = new AuthRequest();
    }

    ionViewDidLoad() {
        /*
        const url = `${config.apiUrl}/users/:id`;
        this.http.patch(url).subscribe(users => {
            console.log(`Users loaded`, users);
        });
        */

        this.auth.getUser().subscribe(user => {
            this.username = user.name;
            this.userid = user.id;
            this.createdAt = user.createdAt;
            this. updatedAt = user.updatedAt;
        })
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
        this.auth.editUser(this.authRequest, this.userid).subscribe(() => this.accountPage(), err => {
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
                        this.auth.deleteUser(this.authRequest, this.userid);
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
        this.navCtrl.parent.select(3);
    }
}