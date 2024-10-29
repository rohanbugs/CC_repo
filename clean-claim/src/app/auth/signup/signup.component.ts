import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  onSubmit() {
    console.log('Signup form submitted');
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Perform signup logic here (e.g., API call)
  }

  onGoogleLogin() {
    console.log('Google login button clicked');
    // Handle Google login logic here
  }
}
