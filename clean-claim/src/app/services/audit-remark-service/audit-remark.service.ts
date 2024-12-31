import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuditRemarkService {

  constructor(private http:HttpClient) { }

  baseUrl = "http://127.0.0.1:8000/claims";
   
  getAuditRemark(claimId:string):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/audit-remark/${claimId}`);
  }

  patchAuditRemark(claimId:string,auditRemark:string,status:string):Observable<any>{
    console.log('Audit Remark:',auditRemark);
    console.log('Status:',status);
    console.log('Claim ID:',claimId);
    return this.http.patch<any>(`${this.baseUrl}/audit-remark-update/${claimId}`,{status:status,audit_remark:auditRemark});
  }

}
