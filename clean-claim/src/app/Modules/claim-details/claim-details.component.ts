import { Component, Input, OnInit } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { ClaimsService } from '../../services/claims.service';

@Component({
  selector: 'app-claim-details',
  standalone: true,
  imports: [MatCard],
  templateUrl: './claim-details.component.html',
  styleUrl: './claim-details.component.css'
})
export class ClaimDetailsComponent implements OnInit{

  @Input() claimid!: string; 
  claimDetails:any={};
  constructor(private claimsService:ClaimsService){}


  ngOnInit(): void {
    console.log("claimid in ngOnInit:", this.claimid);
    this.claimsService.getclaimsDetails(this.claimid).subscribe((data) => {
      this.claimDetails = data;
    });
  }

}
