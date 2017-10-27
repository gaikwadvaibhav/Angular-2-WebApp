import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user';


@Injectable()
export class SignupService {

  constructor( private http: Http) {

  }
  saveUser(user: User) {
      return this.http.post('https://messapp-9fd1a.firebaseio.com/newUser.json', {user});
  }
}

