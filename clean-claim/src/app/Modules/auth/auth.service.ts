import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    

  private apiUrl = 'https://your-backend.com/api/auth';
  private currentUserSubject = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: { email: string; password: string }) {
    return this.http.post(`${this.apiUrl}/login`, credentials).subscribe(
      (response: any) => {
        localStorage.setItem('token', response.token);
        this.currentUserSubject.next(this.decodeToken(response.token));
        this.router.navigate(['/dashboard']);
      },
      (error) => console.error(error)
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  getCurrentUser() {
    return this.currentUserSubject.value;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  private decodeToken(token: string) {
    const payload = atob(token.split('.')[1]);
    return JSON.parse(payload);
  }
}
