import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { map, Observable } from 'rxjs';


// export interface LabTableData {
//   date: string;
//   value: number;
// }


@Injectable({
  providedIn: 'root'
})


export class ClaimsService {
  labTableData:any[]=[]

  private apiUrl = 'http://127.0.0.1:8000/claims/'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  getClaims(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}claim-data-ui-all-insight`);
  }

  getclaimsDetails(claimid:string):Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}claim-data/${claimid}`);
  }

  getLabTableData(claimId: string, attributeName: string): Observable<any[]> {
    const url = `${this.apiUrl}claim-attribute-data/${claimId}/lab-table`;
    const params = new HttpParams().set('attribute_name', attributeName);
  
    return this.http.get<any[]>(url, { params }).pipe(
      map((response) =>
        response.flatMap((item) => 
          item.attribute_data.map((entry: any) => ({
            date: entry.date,
            value: entry.value,
          }))
        )
      )
    );
  }

  getEntityAnnot(claimId: string, attributeName: string):Observable<any[]>{
    const url = `${this.apiUrl}claim-attribute-data/${claimId}/entity-annot`;
    const params = new HttpParams().set('attribute_name', attributeName);
    return this.http.get<any[]>(url,{params})
  }
  
}
