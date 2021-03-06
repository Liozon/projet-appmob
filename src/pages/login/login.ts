import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from 'ionic-angular';

import { AuthRequest } from '../../models/auth-request';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

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
   * Called when the login form is submitted.
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
    this.auth.logIn(this.authRequest).subscribe(() => this.accountPage(), err => {
      this.loginError = true;
      console.warn(`Authentication failed: ${err.message}`);
    });
  }

  signUpPage() {
    this.navCtrl.push(SignupPage, {}, { animate: false });
  }

  accountPage() {
    this.navCtrl.setRoot(HomePage, { opentab: 3 });
  }
}