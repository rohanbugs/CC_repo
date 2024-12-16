import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { PopupComponent } from '../popup/popup.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

// Define an interface for the structure
interface ChecklistItem {
  id: string;
  label: string;
  info: string;
}

interface Section {
  title: string;
  items: ChecklistItem[];
}

@Component({
  selector: 'app-selection-reason',
  standalone: true,
  imports: [CommonModule,MatCardModule, MatCheckboxModule, MatDividerModule,PopupComponent,MatButtonModule],
  templateUrl: './selection-reason.component.html',
  styleUrl: './selection-reason.component.css'
})
export class SelectionReasonComponent {

   @Input() claimid!: string; 

  // Define the sections data
  sections: Section[] = [
    {
      title: 'Vital Signs',
      items: [
        { id: 'temperature', label: 'Temperature', info: 'Details about Temperature' },
        { id: 'respiration', label: 'Respiration', info: 'Details about Respiration' },
        { id: 'pulse', label: 'Pulse', info: 'Details about Pulse' },
        { id: 'bloodPressure', label: 'Blood Pressure', info: 'Details about Blood Pressure' },
        { id: 'spo2', label: 'SpO2', info: 'Details about SpO2' }
      ]
    },
    {
      title: 'Laboratory Tests',
      items: [
        { id: 'arterialBloodGas', label: 'Arterial Blood Gas Test', info: 'Details about Arterial Blood Gas Test' },
        { id: 'bloodCulture', label: 'Blood Culture', info: 'Details about Blood Culture' },
        { id: 'chemistryPanel', label: 'Chemistry Panel', info: 'Details about Chemistry Panel' }
      ]
    },
    {
      title: 'Signs and Symptoms',
      items: [
        { id: 'chills', label: 'Chills', info: 'Details about Chills' },
        { id: 'cough', label: 'Cough', info: 'Details about Cough' },
        { id: 'shortnessOfBreath', label: 'Shortness of Breath', info: 'Details about Shortness of Breath' }
      ]
    },
    {
      title: 'Treatment',
      items: [
        { id: 'antibiotics', label: 'Antibiotics', info: 'Details about Antibiotics' },
        { id: 'antifungals', label: 'Anti-Fungals', info: 'Details about Anti-Fungals' }
      ]
    }
  ];

  constructor(private dialog: MatDialog) {}

  openPopup(vitalLabel: string): void {
    console.log(vitalLabel,"id:",this.claimid)
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '90%', // You can specify a custom width for the popup
      height: '90%', // Optional: Adjust height
      panelClass: 'centered-dialog',
      data: { attirbute: vitalLabel,claimid:this.claimid }, // Pass the vital label as data
    });

    // Optionally, you can handle the close event
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
    console.log('openpopup:',vitalLabel)
  }

 

}
