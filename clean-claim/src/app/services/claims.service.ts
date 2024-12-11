import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClaimsService {

  private apiUrl = 'http://127.0.0.1:8000/claims/'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  getClaims(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}claim-data-ui-all-insight`);
  }

  getclaimsDetails(claimid:string):Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}claim-data/${claimid}`);
  }
}
