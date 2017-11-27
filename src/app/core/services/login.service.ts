import { Injectable } from '@angular/core';
// import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import * as firebase from 'firebase/app';

@Injectable()
export class LoginService {

  currentUser: firebase.User

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
  ) { }

  login(email: string, password: string): Promise<any> {
    return this
      .afAuth
      .auth
      .signInWithEmailAndPassword(email, password)
  }

  resetPassword(email: string): Promise<any> {
    return this
      .afAuth
      .auth
      .sendPasswordResetEmail(email)
  }

  loginWithGoogle(): Promise<any> {
    return this
      .afAuth
      .auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }

  loginWithRoomIdentifier(): Promise<any> {
    return this
      .afAuth
      .auth
      .signInAnonymously()
  }

  logout(): void {
    this
      .afAuth
      .auth
      .signOut()
      .then(rs => {
        this.router.navigateByUrl('login')
      });
  }
}
