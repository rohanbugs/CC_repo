import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-audit-remark',
  standalone: true,
  imports: [CommonModule,FormsModule, MatSelectModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './audit-remark.component.html',
  styleUrl: './audit-remark.component.css'
})
export class AuditRemarkComponent {

  remark: string = 'Following claim has finding';
  isEditing: boolean = false;
  status: string = 'No Status';
  @Input() data!:any[]

  @ViewChild('inputField') inputField?: ElementRef;

  toggleEditing() {
    console.log('Before toggle: isEditing =', this.isEditing);
    if (this.isEditing) {
        this.saveRemark();
    } else {
        this.startEditing();
    }
    console.log('After toggle: isEditing =', this.isEditing);
}

saveRemark() {
    this.isEditing = false;
    console.log('Remark saved. isEditing =', this.isEditing);
}

startEditing() {
    this.isEditing = true;
    console.log('Editing started. isEditing =', this.isEditing);
}


  // Update status
  updateStatus(newStatus: string) {
    this.status = newStatus;
  }
}
