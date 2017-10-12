
// import { Injectable } from '@angular/core';
// import { Routes, Router, Route } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
// import { AppComponent } from './app.component';
// import * as firebase from 'firebase/app';
// import { AngularFireAuth } from 'angularfire2/auth';
// import { AngularFireDatabase } from 'angularfire2/database';

// @Injectable()
// export class AuthService {

// Routes: any;
// setUserstatus: any;
// setuserdata: any;
// private user: Observable<firebase.User>;
// private AuthState: any;

//   constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase, private router: Router) {
//     this.user = afAuth.authState;
//    }

//    authuser() {
//      return this.user;
//    }
//    get currentuserid(): string{
//      return this.AuthState !== null ? this.AuthState.id : '';
//    }

//    login(email: string, password: string) {
//      return this.afAuth.auth.signInWithEmailAndPassword(email, password)
//      .then((resolve) => {
//        console.log('auth');
//        const status = 'online';
//        this.setUserstatus(email, status);
//        this.router.navigate(['']);
//      });
//     }


//     signup(name: string, email: string, password: string, retypepassword:string) {
//       return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
//       .then((user) => {
//         this.AuthState = user;
//         const status = 'online';
//         this.setuserdata(email, status);
//         this.router.navigate(['']);
//       })
//       .catch(Error => console.log(Error));
//      }
// }
