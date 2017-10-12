import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user';


@Injectable()
export class SignupService {

  constructor( private http: Http) {

  }
  saveUser(user: User) {
      return this.http.post('https://firstdemo-5eadd.firebaseio.com/signup.json', {user});
  }
}
