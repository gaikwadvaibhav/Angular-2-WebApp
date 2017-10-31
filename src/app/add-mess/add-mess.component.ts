import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-mess',
  templateUrl: './add-mess.component.html',
  styleUrls: ['./add-mess.component.scss']
})
export class AddMessComponent implements OnInit {

  one = true;
   two: boolean;
  three: boolean;

   brd1= 'lightgrey';
   brd2: String;
   brd3: String;

   time = {hour: 13, minute: 30};
   meridian = true;
 
   time1 = {hour: 13, minute: 30};
   meridian1 = true;

   toggleMeridian() {
       this.meridian = !this.meridian;
   }
 

  constructor() { }

  ngOnInit() {
  }


  Onprofile() {
    this.one = true;
    this.two = false;
    this.three = false;
    if (this.one === true) {
      this.brd1 = ' lightgrey';
      this.brd2 = '';
      this.brd3 = '';
    }

  }

  Onfollow() {
    console.log('in follew');
    this.one = false;
    this.two = true;
    this.three = false;
    if (this.two === true) {
      this.brd2 = '  lightgrey';
      this.brd1 = '';
      this.brd3 = '';
    }
    }

  Oncontact() {
    this.one = false;
    this.two = false;
    this.three = true;
    if (this.three === true) {
      this.brd3 = '  lightgrey';
      this.brd2 = '';
      this.brd1 = '';
    }
    }

}
