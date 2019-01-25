import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AuthProvider } from '../../providers/auth/auth';
import { config } from '../../app/config';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { RestProvider } from '../../providers/rest/rest';
import { User } from '../../models/user';
import { UserAccountPage } from '../users/userAccount';



/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  restProvider: RestProvider;
  userList: User[];

  users: any;
  user: User;

  constructor(private auth: AuthProvider, public http: HttpClient, public navCtrl: NavController, private rest: RestProvider, public navParams: NavParams, private camera: Camera) {
    this.userList = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');

    this.rest.getUsers().subscribe(userList => {
      this.userList = userList;
    });

  }

  onInput(e: any) {
    this.rest.getUsers(e.target.value).subscribe(userList => {
      this.userList = userList;
    });
  }

  showUser(user) {
    this.navCtrl.push(UserAccountPage, {
      user: user
    });
  }

}
