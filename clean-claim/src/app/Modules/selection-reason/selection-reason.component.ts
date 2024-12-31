import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { PopupComponent } from '../popup/popup.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { title } from 'process';
import { ClaimsService } from '../../services/claims.service';

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

interface Categories {
  title:string;
  items:string[];
}

@Component({
  selector: 'app-selection-reason',
  standalone: true,
  imports: [CommonModule,
    PopupComponent,
    MatCardModule, MatCheckboxModule, MatDividerModule,MatButtonModule],
  templateUrl: './selection-reason.component.html',
  styleUrl: './selection-reason.component.css'
})
export class SelectionReasonComponent {

   @Input() claimid!: string; 
   categories: { title: string, items: string[] }[] = []; // Inline Categories definition
  constructor(private dialog: MatDialog,private claimservice:ClaimsService) {}

  ngOnInit(): void {
    console.log("claimid:",this.claimid)
    this.fetchdata()
  }

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

  fetchdata(){
    this.claimservice.getPresentAttributes(this.claimid).subscribe({
      next: (response) => {
        // Mapping the response directly in the component
        if (response?.[0]?.present_attr) {
          const presentAttr = response[0].present_attr;
          console.log("presentAttr:",presentAttr)
          this.categories = Object.keys(presentAttr).map(key => ({
            title: key,
            items: presentAttr[key]
          }));
          console.log("categories:",this.categories)
        }
      },
      error: (err) => {
        console.error('Error loading categories', err);
      }
    });
  }

}
