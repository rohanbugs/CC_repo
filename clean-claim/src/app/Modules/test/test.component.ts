import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, Input, SimpleChanges } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-test',
  standalone: true,
  imports: [ CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent  {
 // Sample table data to pass to the LinegraphComponent


constructor() {}
expandedRow: number | null = null;

  // Sample data
  tableData = [
    {
      drgCode: '001',
      auditLocator: 'AL123',
      paidAmount: 2500,
      patientId: 'P001',
      assignedTo: 'Dr. John',
      status: 'Pending',
      drgCodeDescription: 'Description for DRG Code 001',
    },
    {
      drgCode: '002',
      auditLocator: 'AL124',
      paidAmount: 3200,
      patientId: 'P002',
      assignedTo: 'Dr. Smith',
      status: 'Completed',
      drgCodeDescription: 'Description for DRG Code 002',
    },
    // Add more rows as needed
  ];

  toggleRow(index: number): void {
    this.expandedRow = this.expandedRow === index ? null : index;
  }
  



  

  
}
