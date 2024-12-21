import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, Input, SimpleChanges } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { ClaimsService } from '../../services/claims.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { SelectionReasonComponent } from '../selection-reason/selection-reason.component';
import { ClaimDetailsComponent } from '../claim-details/claim-details.component';
import { AuditRemarkComponent } from '../audit-remark/audit-remark.component';


@Component({
  selector: 'app-test',
  standalone: true,
  imports: [ 
    CommonModule,
    MatPaginatorModule,
    CommonModule,
       MatExpansionModule,
       MatIconModule,
       SelectionReasonComponent,
       MatCard,
       MatMenuModule,
       ClaimDetailsComponent,
       AuditRemarkComponent,
       MatPaginatorModule,
       
  ],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent  {active: number = 0;
 
}
