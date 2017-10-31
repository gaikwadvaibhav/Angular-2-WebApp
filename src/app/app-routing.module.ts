import { ViewMessComponent } from './view-mess/view-mess.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './NavForms/login-form/login-form.component';
import { SignUpFormComponent } from './NavForms/sign-up-form/sign-up-form.component';
import { ForgotPassFormComponent } from './NavForms/forgot-pass-form/forgot-pass-form.component';
import { ResetPassFormComponent } from './NavForms/reset-pass-form/reset-pass-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { AddMessComponent } from './add-mess/add-mess.component';
export const routes: Routes = [
  // { path: '', component: NavBarComponent},
  // { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'signup', component: SignUpFormComponent},
  { path: 'forgotpass', component: ForgotPassFormComponent},
  { path: 'resetpass', component: ResetPassFormComponent},
  { path: 'searchresult', component: SearchResultComponent},
  { path: 'viewmess', component: ViewMessComponent},
   { path: 'addmess', component: AddMessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
