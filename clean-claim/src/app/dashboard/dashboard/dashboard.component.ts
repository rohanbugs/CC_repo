import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
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
}
