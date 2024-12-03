declare var google:any;
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;
  loginError: string | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      rememberMe: [false]
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    if (this.loginForm.invalid) return;

    this.isLoading = true;
    this.loginError = null;

    const { email, password, rememberMe } = this.loginForm.value;

    this.authService.login(email, password).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.access_token);  // Save the token
        if (rememberMe) {
          localStorage.setItem('rememberMe', 'true');
        }
        this.router.navigate(['/claims']);  // Navigate to dashboard or desired route
        this.isLoading = false;
      },
      error: (error) => {
        this.loginError = 'Invalid email or password.';
        this.isLoading = false;
      }
    });
  }
}
