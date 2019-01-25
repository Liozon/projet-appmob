import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { User } from '../../models/user';
import { UserAccountPage } from '../users/userAccount';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})

export class UsersPage {

  restProvider: RestProvider;
  userList: User[];

  user: User;

  constructor(public navCtrl: NavController, private rest: RestProvider) {
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
