import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs/Rx';
import { delayWhen, map } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { config } from '../../app/config';

import { AuthRequest } from '../../models/auth-request';
import { AuthResponse } from '../../models/auth-response';
import { User } from '../../models/user';

/**
 * Authentication service for login/logout.
 */
@Injectable()
export class AuthProvider {

  private auth$: Observable<AuthResponse>;
  private authSource: ReplaySubject<AuthResponse>;

  constructor(private http: HttpClient, private storage: Storage) {
    this.authSource = new ReplaySubject(1);
    //this.authSource.next(undefined);
    this.auth$ = this.authSource.asObservable();

    this.storage.get('auth').then(auth => {
      // Push the loaded value into the observable stream.
      this.authSource.next(auth);
    });
  }

  isAuthenticated(): Observable<boolean> {
    return this.auth$.pipe(map(auth => !!auth));
  }

  getUser(): Observable<User> {
    return this.auth$.pipe(map(auth => auth ? auth.user : undefined));
  }

  getToken(): Observable<string> {
    return this.auth$.pipe(map(auth => auth ? auth.token : undefined));
  }

  logIn(authRequest: AuthRequest): Observable<User> {

    const authUrl = `${config.apiUrl}/auth`;
    return this.http.post<AuthResponse>(authUrl, authRequest).pipe(
      delayWhen(auth => {
        return this.saveAuth(auth);
      }),
      map(auth => {
        this.authSource.next(auth);
        console.log(`User ${auth.user.name} logged in`);
        return auth.user;
      })
    );
  }

  logOut() {
    this.authSource.next(null);
    this.storage.remove('auth');
    console.log('User logged out');
  }

  private saveAuth(auth: AuthResponse): Observable<void> {
    return Observable.fromPromise(this.storage.set('auth', auth));
  }

  createUser(authRequest: AuthRequest): Observable<User> {

    const createUserUrl = `${config.apiUrl}/users`;
    return this.http.post<User>(createUserUrl, authRequest);
  }

  editUser(authRequest: AuthRequest, id: string): Observable<User> {
    /*const editUserUrl = `${config.apiUrl}/users/${auth.user.id}`;
    return this.http.patch<User>(editUserUrl, authRequest);*/
    const editUrl = `${config.apiUrl}/users/` + id;
    return this.http.patch<AuthResponse>(editUrl, authRequest).pipe(
      delayWhen(auth => {
        return this.saveAuth(auth);
      }),
      map(auth => {
        this.authSource.next(auth);
        console.log(`User ${auth.user.name} updated`);
        return auth.user;
      })
    );
  }

  deleteUser(authRequest: AuthRequest, id: string): Observable<User> {
    const deleteUserUrl = `${config.apiUrl}/users/` + id;
    return this.http.delete<User>(deleteUserUrl);
  }
}