import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { SelectionReasonComponent } from '../selection-reason/selection-reason.component';
import { MatCard } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { ClaimsService } from '../../services/claims.service';
import { ClaimDetailsComponent } from '../claim-details/claim-details.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-allinsights',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    SelectionReasonComponent,
    MatCard,
    MatMenuModule,
    ClaimDetailsComponent,
    MatPaginatorModule,
  ],
  templateUrl: './allinsights.component.html',
  styleUrl: './allinsights.component.css',
})
export class AllinsightsComponent implements OnInit {
  active: number = 0;
  isPanelOpen: { [key: string]: boolean } = {};
  expandedRow: number | null = null;
  drgRecords: any[] = [];

  // Pagination variables
  currentPage: number = 1; // Default page number
  pageSize: number = 10; // Number of records per page
  totalRecords: number = 0; // Total number of records
  pagedData: any[] = []; // Data to be displayed on the current page
  totalPages: number = 0; // New variable to store the number of pages

  toggleRow(index: number): void {
    this.expandedRow = this.expandedRow === index ? null : index;
  }

  constructor(private claimsService: ClaimsService) {
    this.isPanelOpen = {
      claimInformation: false,
      codingWorksheet: false,
      selectionReason: false,
      message: false,
      auditRemark: false,
    };
  }

  ngOnInit(): void {
    this.claimsService.getClaims().subscribe((data) => {
      this.drgRecords = [...data,...data.slice(2, 7)];
      this.totalRecords = this.drgRecords.length;
    this.totalPages = Math.ceil(this.totalRecords / this.pageSize); // Calculate total pages
    this.paginateData();
     
    });
    
  
  }
  // Paginate data based on current page and page size
  paginateData(): void {

    
    console.log("records:",this.drgRecords)
    console.log("records:",this.drgRecords.length)
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedData = this.drgRecords.slice(startIndex, endIndex);
  }

  // Go to next page
  nextPage(): void {
    if (this.currentPage < Math.ceil(this.totalRecords / this.pageSize)) {
      this.currentPage++;
      this.paginateData();
    }
  }

  // Go to previous page
  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginateData();
    }
  }

  // Set the page size (number of records per page)
  setPageSize(size: number): void {
    this.pageSize = size;
    this.currentPage = 1; // Reset to first page when page size changes
    this.paginateData();
  }
}
