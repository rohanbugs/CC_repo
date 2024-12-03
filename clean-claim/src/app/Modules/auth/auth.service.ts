import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';


interface UserRegister {
  username: string;
  email: string;
  password: string;
  role: 'Auditor' | 'Manager' | 'Admin';
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
    

  private apiUrl = 'http://127.0.0.1:8000/auth';
  private currentUserSubject = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { email, password };

    return this.http.post(`${this.apiUrl}/login`, body, { headers });
  }

  registerUser(user: UserRegister): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  resetPassword(token: string, newPassword: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { token, new_password: newPassword };

    return this.http.post(`${this.apiUrl}/reset-password`, body, { headers });
  }
}
