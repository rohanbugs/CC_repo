import { CommonModule } from '@angular/common';
import { Component, Inject, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
// import { ChartData, ChartOptions ,Chart,registerables} from 'chart.js';
import { MatButtonModule } from '@angular/material/button';
import {TestComponent} from '../test/test.component'
import { TabledataService } from '../../tableview/tabledata.service';
import { LinegraphComponent } from '../../linegraph/linegraph.component';
import { TableviewComponent } from '../../tableview/tableview.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule,MatDialogModule,FormsModule,
    MatButtonModule,TestComponent,LinegraphComponent,MatInputModule,
    TableviewComponent,MatNativeDateModule,MatDatepickerModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent implements OnInit{

  tableData: any[] = [];
  vitalLabel: string;

  startDate: Date | null = null; // Start date model
  endDate: Date | null = null; // End date model

  // Inject the data passed from the parent component (ChecklistItem)

  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    private tabledataservice: TabledataService,
    @Inject(MAT_DIALOG_DATA) public data: { id: string, label: string, info: string }) {
    this.vitalLabel = data.id;
  }

  selectedView: string = 'graph'; // Default view is Graph View

  // Method to select view
  selectView(view: string): void {
    this.selectedView = view;
  }

  ngOnInit(): void {
    this.getVitalData(this.vitalLabel);
  }

  closePopup(): void {
    this.dialogRef.close(); // Close the popup
  }

  getVitalData(vital: string): void {
    this.tabledataservice.getVitalData(vital).subscribe((data) => {
      this.tableData = data; // Update tableData with the response from the backend
    });
  }
}
