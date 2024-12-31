import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AuditRemarkService } from '../../services/audit-remark-service/audit-remark.service';

enum Status {
  Pending = 'Pending',
  InProgress = 'In Progress',
  Completed = 'Completed'
}
interface auditform{
  audit_remark:string;
  status:string;  
}

@Component({
  selector: 'app-audit-remark',
  standalone: true,
  imports: [CommonModule,FormsModule, MatSelectModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './audit-remark.component.html',
  styleUrl: './audit-remark.component.css'
})
export class AuditRemarkComponent implements OnInit {

  // statuses = [Status.Pending, Status.InProgress, Status.Completed];
  // selectedStatus!: Status.Pending;
   // Admin status list
   adminStatuses = [
    { value: 'Unassigned', label: 'Unassigned' },
    { value: 'InProgress', label: 'In Progress' },
    { value: 'Completed', label: 'Completed' },
    { value: 'Delayed', label: 'Delayed' }
  ];

  // User status list
  userStatuses = [
    { value: 'Complete With Finding', label: 'Complete With Finding' },
    { value: 'Complete Without Finding', label: 'Complete Without Finding' }
  ];

  admin: boolean = false; // Current role, admin is true
  statuses: { value: string; label: string }[] = [];// The dynamic status list based on role
  
  selectedStatus: string;  // Initially selected status
  
  remark: string = '';
  isEditing: boolean = false;
  @Input() claimId!:string;


  @ViewChild('inputField') inputField?: ElementRef;
  constructor(private auditRemarkService: AuditRemarkService) { 
    this.selectedStatus = this.admin ? 'CompleteWithFinding':'Unassigned' ;// Set the initial selectedStatus based on role (example defaulting to first status)
  }

  ngOnInit(): void {
    
    this.setStatusesBasedOnRole(); // Set the statuses based on the current user role
    
    console.log('Claim ID in audit remark:', this.claimId);
    this.getAuditRemark(this.claimId);
    
  }
  
  // auditForm:auditform = {audit_remark:this.remark,status:this.selectedStatus};

  // Function to set statuses based on role
  setStatusesBasedOnRole() {
    if (this.admin) {
      this.statuses = this.adminStatuses; // Admin roles
    } else {
      this.statuses = this.userStatuses; // User roles
    }
  }

  getAuditRemark(claimId: string): void {
    this.auditRemarkService.getAuditRemark(claimId).subscribe(
      (data) => {
        this.remark = data.audit_remark;
        this.selectedStatus=data.status
         // Store the audit remark value from the response
        console.log('Fetched audit remark:', this.remark); // Optionally log the data
        console.log('Fetched status:', data.status); // Optionally log the data
        console.log('Fetched selectedstatus:', this.selectedStatus);
      },
      (error) => {
        // console.error('Error fetching audit remark:', error); // Handle error if needed
      }
    );
  }

  updateAuditRemark(claimId: string,auditRemark: string, status:string): void {
    console.log('Updating audit remark:', auditRemark);
    console.log('Updating status:', status);
    this.auditRemarkService.patchAuditRemark(claimId,status, auditRemark).subscribe(
      (response) => {
        if (response && response.success) { // Assuming response has a success field
          console.log('Audit remark updated:', response.message); // Optionally show a success message
        } else {
          // console.log('Unexpected response:', response); // Handle non-success responses
        }
      },
      (error) => {
        // console.error('Error updating audit remark:', error);
        // Optionally, show an error message on the UI
      }
    );
  }

 toggleEditing() {
  this.isEditing = true;
 }
saveRemark() {
    this.isEditing = false;
    console.log('Remark saved. isEditing =', this.isEditing);
    console.log('Selected status:', this.selectedStatus);
    console.log('Remark:', this.remark);
    this.updateAuditRemark( this.claimId,this.selectedStatus,this.remark);
    // console.log('Remark saved. isEditing =', this.isEditing);
    
}

onstatusChange(event: any) {
  this.saveRemark();
}

}
