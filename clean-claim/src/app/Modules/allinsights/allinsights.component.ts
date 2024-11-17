import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-allinsights',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MatIconModule],
  templateUrl: './allinsights.component.html',
  styleUrl: './allinsights.component.css',
})
export class AllinsightsComponent {
  active: number = 0;
  isPanelOpen: { [key: string]: boolean } = {};

  constructor() {
    this.isPanelOpen = {
      claimInformation: false,
      codingWorksheet: false,
      selectionReason: false,
      message: false,
      auditRemark: false,
    };
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
