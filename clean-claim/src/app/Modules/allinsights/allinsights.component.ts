import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { SelectionReasonComponent } from '../selection-reason/selection-reason.component';
import { MatCard } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { ClaimsService } from '../../services/claims.service';
import { ClaimDetailsComponent } from '../claim-details/claim-details.component';

@Component({
  selector: 'app-allinsights',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    SelectionReasonComponent,
   MatCard, MatMenuModule,
   ClaimDetailsComponent
  ],
  templateUrl: './allinsights.component.html',
  styleUrl: './allinsights.component.css',
})
export class AllinsightsComponent implements OnInit {
  active: number = 0;
  isPanelOpen: { [key: string]: boolean } = {};
  expandedRow: number | null = null;
  drgRecords:any[]=[]

  toggleRow(index: number): void {
    this.expandedRow = this.expandedRow === index ? null : index;
  }

  constructor(private claimsService:ClaimsService) {
    this.isPanelOpen = {
      claimInformation: false,
      codingWorksheet: false,
      selectionReason: false,
      message: false,
      auditRemark: false,
    };
  }

  

  ngOnInit(): void {
    this.claimsService.getClaims().subscribe((data) => {
      this.drgRecords = data;
    });
  }

 

  // drgRecords = [
  //   {
  //     drgCode: 445,
  //     description: 'Urinary System Infection and Inflammation with MCC',
  //     code: 'ABCDE1245',
  //     amount: 1900992.33,
  //     patientId: 'G2EF3E',
  //     patientName: 'Noah Williams',
  //     status: 'Finished',
  //   },
  //   {
  //     drgCode: 531,
  //     description: 'Respiratory Infection and Inflammation with MCC',
  //     code: 'ABCDE1245',
  //     amount: 1000992.33,
  //     patientId: 'D2EF3E',
  //     patientName: 'Jessica Lee',
  //     status: 'Unassigned',
  //   },
  //   {
  //     drgCode: 433,
  //     description: 'Respiratory Infection and Inflammation with MCC',
  //     code: 'ABCDE1245',
  //     amount: 1000992.33,
  //     patientId: 'D2EF3E',
  //     patientName: 'Jessica Lee',
  //     status: 'Unassigned',
  //   },
  //   {
  //     drgCode: 242,
  //     description: 'Respiratory Infection and Inflammation with MCC',
  //     code: 'ABCDE1245',
  //     amount: 1000992.33,
  //     patientId: 'D2EF3E',
  //     patientName: 'Jessica Lee',
  //     status: 'Unassigned',
  //   },
  //   {
  //     drgCode: 124,
  //     description: 'Respiratory Infection and Inflammation with MCC',
  //     code: 'ABCDE1245',
  //     amount: 1000992.33,
  //     patientId: 'D2EF3E',
  //     patientName: 'Jessica Lee',
  //     status: 'Unassigned',
  //   },
  //   {
  //     drgCode: 445,
  //     description: 'Urinary System Infection and Inflammation with MCC',
  //     code: 'ABCDE1245',
  //     amount: 1900992.33,
  //     patientId: 'G2EF3E',
  //     patientName: 'Noah Williams',
  //     status: 'Finished',
  //   },
  //   {
  //     drgCode: 531,
  //     description: 'Respiratory Infection and Inflammation with MCC',
  //     code: 'ABCDE1245',
  //     amount: 1000992.33,
  //     patientId: 'D2EF3E',
  //     patientName: 'Jessica Lee',
  //     status: 'Unassigned',
  //   },
  //   {
  //     drgCode: 433,
  //     description: 'Respiratory Infection and Inflammation with MCC',
  //     code: 'ABCDE1245',
  //     amount: 1000992.33,
  //     patientId: 'D2EF3E',
  //     patientName: 'Jessica Lee',
  //     status: 'Unassigned',
  //   },
  //   {
  //     drgCode: 242,
  //     description: 'Respiratory Infection and Inflammation with MCC',
  //     code: 'ABCDE1245',
  //     amount: 1000992.33,
  //     patientId: 'D2EF3E',
  //     patientName: 'Jessica Lee',
  //     status: 'Unassigned',
  //   },
  //   {
  //     drgCode: 124,
  //     description: 'Respiratory Infection and Inflammation with MCC',
  //     code: 'ABCDE1245',
  //     amount: 1000992.33,
  //     patientId: 'D2EF3E',
  //     patientName: 'Jessica Lee',
  //     status: 'Unassigned',
  //   },
  //   // add more records as needed
  // ];
}
