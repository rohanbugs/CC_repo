import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
// import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MatIconModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  active: number = 0;
  isPanelOpen: { [key: string]: boolean } = {};

  constructor() {
    // Initialize all panels as closed
    this.isPanelOpen = {
      claimInformation: false,
      codingWorksheet: false,
      selectionReason: false,
      message: false,
      auditRemark: false,
    };
  }

  togglePanel(panel: string): void {
    // Toggle the panel's open/close state
    this.isPanelOpen[panel] = !this.isPanelOpen[panel];
  }

  drgRecords = [
    {
      drgCode: 445,
      description: 'Urinary System Infection and Inflammation with MCC',
      code: 'ABCDE1245',
      amount: 1900992.33,
      patientId: 'G2EF3E',
      patientName: 'Noah Williams',
      status: 'Finished',
    },
    {
      drgCode: 531,
      description: 'Respiratory Infection and Inflammation with MCC',
      code: 'ABCDE1245',
      amount: 1000992.33,
      patientId: 'D2EF3E',
      patientName: 'Jessica Lee',
      status: 'Unassigned',
    },
    {
      drgCode: 433,
      description: 'Respiratory Infection and Inflammation with MCC',
      code: 'ABCDE1245',
      amount: 1000992.33,
      patientId: 'D2EF3E',
      patientName: 'Jessica Lee',
      status: 'Unassigned',
    },
    {
      drgCode: 242,
      description: 'Respiratory Infection and Inflammation with MCC',
      code: 'ABCDE1245',
      amount: 1000992.33,
      patientId: 'D2EF3E',
      patientName: 'Jessica Lee',
      status: 'Unassigned',
    },
    {
      drgCode: 124,
      description: 'Respiratory Infection and Inflammation with MCC',
      code: 'ABCDE1245',
      amount: 1000992.33,
      patientId: 'D2EF3E',
      patientName: 'Jessica Lee',
      status: 'Unassigned',
    },
    {
      drgCode: 445,
      description: 'Urinary System Infection and Inflammation with MCC',
      code: 'ABCDE1245',
      amount: 1900992.33,
      patientId: 'G2EF3E',
      patientName: 'Noah Williams',
      status: 'Finished',
    },
    {
      drgCode: 531,
      description: 'Respiratory Infection and Inflammation with MCC',
      code: 'ABCDE1245',
      amount: 1000992.33,
      patientId: 'D2EF3E',
      patientName: 'Jessica Lee',
      status: 'Unassigned',
    },
    {
      drgCode: 433,
      description: 'Respiratory Infection and Inflammation with MCC',
      code: 'ABCDE1245',
      amount: 1000992.33,
      patientId: 'D2EF3E',
      patientName: 'Jessica Lee',
      status: 'Unassigned',
    },
    {
      drgCode: 242,
      description: 'Respiratory Infection and Inflammation with MCC',
      code: 'ABCDE1245',
      amount: 1000992.33,
      patientId: 'D2EF3E',
      patientName: 'Jessica Lee',
      status: 'Unassigned',
    },
    {
      drgCode: 124,
      description: 'Respiratory Infection and Inflammation with MCC',
      code: 'ABCDE1245',
      amount: 1000992.33,
      patientId: 'D2EF3E',
      patientName: 'Jessica Lee',
      status: 'Unassigned',
    },
    // add more records as needed
  ];
}
