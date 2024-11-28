import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuditItem, SummaryService } from '../service/summary.service';

@Component({
  selector: 'app-claim-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './claim-overview.component.html',
  styleUrl: './claim-overview.component.css'
})
export class ClaimOverviewComponent implements OnInit {
  

  auditItems: AuditItem[] = [];

  constructor(private summaryService: SummaryService) {}

  ngOnInit(): void {
    this.summaryService.getAuditItems().subscribe((data) => {
      this.auditItems = data;
    });
  }
  // Active filter
  activeFilter: string = 'all'; // Default to "All"

  // Method to change the filter
  setFilter(filter: string): void {
    this.activeFilter = filter;
  }

  // Get filtered audit items
  get filteredAuditItems() {
    console.log("auditItems:",this.auditItems)
    if (this.activeFilter === 'all') {
      return this.auditItems;
    }
    return this.auditItems.filter((item) => item.status === this.activeFilter);
  }

}
