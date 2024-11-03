import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ResetpasswordComponent } from './auth/resetpassword/resetpassword.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'reset',component:ResetpasswordComponent}
];
