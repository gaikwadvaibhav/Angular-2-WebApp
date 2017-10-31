// import { User } from './../../../../e2e/modules/user.module';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user';
// import * as firebase from 'firebase/app';

declare var firebase;

@Injectable()
export class SignupService {

  constructor( private http: Http) {

  }
  // saveUser(user: User) {
  //     return this.http.post('https://mess-a8efb.firebaseio.com/newdata.json', {user});
  // }

  saveUser(user: User) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function(error) {
      // Handle Errors here.
      // tslint:disable-next-line:prefer-const
      var errorCode = error.code;
      // tslint:disable-next-line:prefer-const
      var errorMessage = error.message;
      // ...
    });
  }

  signIn(user: User, callBack: any) {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch(function(error) {
      // Handle Errors here.
      // tslint:disable-next-line:prefer-const
      var errorCode = error.code;
      // tslint:disable-next-line:prefer-const
      var errorMessage = error.message;
      // ...
    });
    firebase.auth().onAuthStateChanged(callBack);
  }
}

