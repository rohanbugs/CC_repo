import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface AuditItem {
  title: string;
  id: number;
  amount: number;
  date: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})

export class SummaryService {

  private baseUrl = 'https://localhost:7039/api'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getAuditItems(): Observable<AuditItem[]> {
    return this.http.get<AuditItem[]>(`${this.baseUrl}/Summary`);
  }


}
