import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { PopupComponent } from '../popup/popup.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-selection-reason',
  standalone: true,
  imports: [MatCardModule, MatCheckboxModule, MatDividerModule,PopupComponent,MatButtonModule],
  templateUrl: './selection-reason.component.html',
  styleUrl: './selection-reason.component.css'
})
export class SelectionReasonComponent {

  tableData: any[] = [];


  constructor(private dialog: MatDialog) {}

  openPopup(vitalLabel: string): void {
    console.log('openpopup1')
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '85%', // You can specify a custom width for the popup
      height: '90%', // Optional: Adjust height
      panelClass: 'centered-dialog',
      data: { vital: 'bc' }, // Pass the vital label as data
    });

    // Optionally, you can handle the close event
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
    console.log('openpopup')
  }

 

}
