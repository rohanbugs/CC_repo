import { Component } from '@angular/core';
import { ClaimOverviewComponent } from './claim-overview/claim-overview.component';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [ClaimOverviewComponent],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {

}
