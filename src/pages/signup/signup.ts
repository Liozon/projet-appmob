import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';

import { AuthRequest } from '../../models/auth-request';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';


@Component({
    selector: 'page-signup',
    templateUrl: 'signup.html'
})

export class SignupPage {

    /**
   * This authentication request object will be updated when the user
   * edits the login form. It will then be sent to the API.
   */
    authRequest: AuthRequest;

    /**
     * If true, it means that the authentication API has return a failed response
     * (probably because the name or password is incorrect).
     */
    loginError: boolean;

    /**
     * The login form.
     */
    @ViewChild(NgForm)
    form: NgForm;

    constructor(private auth: AuthProvider, private navCtrl: NavController) {
        this.authRequest = new AuthRequest();
    }
    /**
   * Called when the signup form is submitted.
   */
    onSubmit($event) {

        // Prevent default HTML form behavior.
        $event.preventDefault();

        // Do not do anything if the form is invalid.
        if (this.form.invalid) {
            return;
        }

        // Hide any previous login error.
        this.loginError = false;

        // Perform the authentication request to the API.
        this.auth.createUser(this.authRequest).subscribe(()=> this.logInPage(), err => {
            this.loginError = true;
            console.warn(`Creating User failed: ${err.message}`);
        });
    }

    logInPage() {
        this.navCtrl.push(LoginPage, {}, { animate: false });
    }
}