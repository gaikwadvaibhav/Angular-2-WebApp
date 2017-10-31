import { UserService } from './user.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';
import { LoginFormComponent } from './NavForms/login-form/login-form.component';
import { SignUpFormComponent } from './NavForms/sign-up-form/sign-up-form.component';
import { ForgotPassFormComponent } from './NavForms/forgot-pass-form/forgot-pass-form.component';
import { ResetPassFormComponent } from './NavForms/reset-pass-form/reset-pass-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { Observable } from 'rxjs/Observable';
// import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
//  import {AngularFireDatabaseModule} from 'angularfire2/database';
// import { RouterModule } from '@angular/router';
// import {AngularFireModule } from 'angularfire2';
// import { AuthService } from './auth.service';
import { SignupService } from './NavForms/sign-up-form/signup.service';
import { SearchResultComponent } from './search-result/search-result.component';
import { ViewMessComponent } from './view-mess/view-mess.component';
import { AddMessComponent } from './add-mess/add-mess.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// const firebase = {
//   apiKey: 'AIzaSyAcL-E-mqaGw-xg0ly9v_PzsSTwDOEYOFU',
//   authDomain: 'firstdemo-5eadd.firebaseapp.com',
//   databaseURL: 'https://firstdemo-5eadd.firebaseio.com',
//   projectId: 'firstdemo-5eadd',
//   storageBucket: 'firstdemo-5eadd.appspot.com',
//   messagingSenderId: '882625729220'
// };

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignUpFormComponent,
    ForgotPassFormComponent,
    ResetPassFormComponent,
    NavBarComponent,
    HomeComponent,
    SearchResultComponent,
    ViewMessComponent,
    AddMessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    MaterializeModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
    // AngularFirestoreModule,
    // AngularFireAuthModule,
    // AngularFireDatabaseModule,
    // AngularFireModule.initializeApp(firebase),
    // RouterModule.forRoot(routes)

  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [SignupService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
