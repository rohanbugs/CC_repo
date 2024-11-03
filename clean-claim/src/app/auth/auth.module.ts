import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
