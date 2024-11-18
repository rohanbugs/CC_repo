import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { PopupComponent } from '../popup/popup.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-selection-reason',
  standalone: true,
  imports: [MatCardModule, MatCheckboxModule, MatDividerModule,PopupComponent,MatButtonModule],
  templateUrl: './selection-reason.component.html',
  styleUrl: './selection-reason.component.css'
})
export class SelectionReasonComponent {


  constructor(private dialog: MatDialog) {}

  openPopup(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '100vw', // You can specify a custom width for the popup
      height: 'auto', // Optional: Adjust height
      panelClass: 'centered-dialog',
    });

    // Optionally, you can handle the close event
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
