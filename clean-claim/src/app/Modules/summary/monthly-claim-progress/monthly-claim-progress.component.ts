import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-monthly-claim-progress',
  standalone: true,
  imports: [CommonModule,MatCard],
  templateUrl: './monthly-claim-progress.component.html',
  styleUrl: './monthly-claim-progress.component.css'
})
export class MonthlyClaimProgressComponent {
  cards = [
    { name: 'Shorya Shriwastav', scoreUp: 25016, scoreDown: 12106 },
    { name: 'Alice Barlow', scoreUp: 35012, scoreDown: 17854 },
    { name: 'Kai Phillips', scoreUp: 15234, scoreDown: 9321 },
    { name: 'Jaden Lee', scoreUp: 41257, scoreDown: 20639 },
    { name: 'Riley Cooper', scoreUp: 29013, scoreDown: 14092 },
    { name: 'Mia Miller', scoreUp: 19562, scoreDown: 9923 },
    { name: 'Parker Thompson', scoreUp: 38245, scoreDown: 18653 },
    { name: 'Lucas Martinez', scoreUp: 27149, scoreDown: 13584 },
    { name: 'Jaden Lee', scoreUp: 41257, scoreDown: 20639 },
  ];

  getInitials(name: string): string {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('');
  }

}
