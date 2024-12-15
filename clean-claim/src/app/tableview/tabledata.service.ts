import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface TableData {
  date: string;
  [key: string]: any; // This allows dynamic keys like "wbc", "rbc", etc.
}

@Injectable({
  providedIn: 'root'
})
export class TabledataService {

  private baseUrl = 'https://localhost:7039/api/selectionreason/vitals'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  
  

 
}
