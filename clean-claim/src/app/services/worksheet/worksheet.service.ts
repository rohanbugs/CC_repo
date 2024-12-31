import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorksheetService {

  baseUrl = 'http://127.0.0.1:8000/claims/';

  constructor(private http:HttpClient) { }

  getWorksheetData(claimID:string):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}coding-sheet/${claimID}`);
  }

  updateWorksheetData(claimID:string,row:any):Observable<any>{
    return this.http.patch<any>(`${this.baseUrl}coding-sheet-update/${claimID}`,row);
  }
}

