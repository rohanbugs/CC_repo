import { Component } from '@angular/core';
import { ClaimOverviewComponent } from './claim-overview/claim-overview.component';
import { MonthlyClaimProgressComponent } from './monthly-claim-progress/monthly-claim-progress.component';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [ClaimOverviewComponent,MonthlyClaimProgressComponent],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {
  

}
