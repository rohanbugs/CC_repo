declare var google:any;
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
// import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {loginForm: FormGroup;
  isLoading = false; // For loading indicator
  loginError: string | null = null; // For incorrect credentials error
  rememberMe = false; // For Remember Me checkbox

  constructor(
    private fb: FormBuilder,
    private router: Router,
    // private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/
          )
        ]
      ],
      rememberMe: [false]
    });
  }

  ngOnInit(): void {
    // Initialize Google sign-in button if applicable
    google.accounts.id.renderButton(
      document.getElementById('google-btn'),
      {
        theme: 'outline',
        shape: 'rectangle'
      }
    );
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

 

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true; // Start loading
      this.loginError = null; // Reset error message
      const { email, password, rememberMe } = this.loginForm.value;
      this.router.navigate(['/summary']);

      // this.authService.login(email, password).subscribe({
      //   next: (response) => {
      //     this.isLoading = false; // Stop loading
          
      //     // Store token based on remember me
      //     if (rememberMe) {
      //       localStorage.setItem('authToken', response.token); // Storing in localStorage for persistence
      //     } else {
      //       sessionStorage.setItem('authToken', response.token); // Storing in sessionStorage
      //     }

      //     // Navigate to dashboard after successful login
      //     this.router.navigate(['/dashboard']);
      //   },
      //   error: (err) => {
      //     this.isLoading = false; // Stop loading
      //     this.loginError = 'Incorrect email or password'; // Show error message
      //     console.error('Login failed', err);
      //   }
      // });
    }
  }
}
