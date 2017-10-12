 import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignupService } from './signup.service';
import { User } from './user';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {


  myForm = NgForm;

  constructor(
    private signup: SignupService
  ) { }

  ngOnInit() {
  }
  onLogin(myForm: NgForm) {
      console.log(myForm);
  }

  addNewUser(myForm: NgForm) {
    console.log(myForm.value);
    let user: User = new User();
    user.name = myForm.value.name;
    user.email = myForm.value.email;
    user.password = myForm.value.password;
    user.confirmpassword = myForm.value.confirmpassword;
    this.signup.saveUser(user).subscribe(res => console.log(res));
  }
}
