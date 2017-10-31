import { User } from './../sign-up-form/user';
import { Component, OnInit } from '@angular/core';
// import { AppGlobals } from 'angular2-google-login';
// import { AngularFireAuth } from 'angularfire2/auth';
// import { Router } from '@angular/router';
// import {NgForm } from '@angular/forms';
// import { AuthService } from '../../auth.service';
import { SignupService } from '../sign-up-form/signup.service';

 @Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  providers: [ ]
})
export class LoginFormComponent implements OnInit {
  user: User;

  ngOnInit() {
   }
   constructor(
     private signup: SignupService
   ) {
     this.user = new User();
  }

  Onlogin() {
    this.signup.signIn(this.user, info => {
      console.log('' + (info ? 'success' : 'fail'));
    });
  }
}
  //  AuthService: any;

  // imageURL: string;
  // email: string;
  // name: string;
  // token: string;
  // phone: string;
  // gender: any;
 
  // onlogin(form: any) {
    //   console.log(form);
    //   const email = form.value.email;
    //   const password = form.value.password;
    //   this.AuthService.login(email, password);
      // this.AuthService.login(email, password);

  //   ngOnInit() {
  //   }
  // }

