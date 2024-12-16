import { CommonModule } from '@angular/common';
import { Component, Input, OnInit,  } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';
import { ClaimsService } from '../../services/claims.service';

@Component({
  selector: 'app-entity-annot',
  standalone: true,
  imports: [CommonModule,MatCardModule],
  templateUrl: './entity-annot.component.html',
  styleUrl: './entity-annot.component.css'
})
export class EntityAnnotComponent implements OnInit{

  @Input() claimId!: string;
  @Input() attribute!: string;
  attribute_data!:any[]
  constructor(private claimservice:ClaimsService){}
  ngOnInit() {
    this.fetchAttributeData()
  }



  fetchAttributeData(): void {
    this.claimservice.getEntityAnnot(this.claimId,this.attribute).subscribe({
      next: (response) => {
        // Assuming response matches the format of your data
        if (response && response.length > 0) {
          this.attribute_data = response[0].attribute_data; // Extract attribute_data array
        }
      },
      error: (error) => {
        console.error('Error fetching attribute data:', error);
      }
    });
  }

  // Data Array (Dynamic data will replace this)
  data = [
    {
      date: '01/02/2024',
      text: 'Creatinine Clearance (if applicable): 33.2 mL/min Results from last 7 days Lab Units 01/19/24 2136 WBC k/uL 11.75',
      annot_link: 'https://example.com/annot1'
    },
    {
      date: '01/02/2024',
      text: 'Pertinent labs include: sodium 134, chloride 97, serum Co2 21, anion gap 16',
      annot_link: 'https://example.com/annot2'
    },
    {
      date: '01/02/2024',
      text: 'Neurological: Mental Status: She is alert and oriented to person, place, and time.',
      annot_link: 'https://example.com/annot3'
    }, {
      date: '01/02/2024',
      text: 'Creatinine Clearance (if applicable): 33.2 mL/min Results from last 7 days Lab Units 01/19/24 2136 WBC k/uL 11.75',
      annot_link: 'https://example.com/annot1'
    },
    {
      date: '01/02/2024',
      text: 'Pertinent labs include: sodium 134, chloride 97, serum Co2 21, anion gap 16',
      annot_link: 'https://example.com/annot2'
    },
    {
      date: '01/02/2024',
      text: 'Neurological: Mental Status: She is alert and oriented to person, place, and time.',
      annot_link: 'https://example.com/annot3'
    }, {
      date: '01/02/2024',
      text: 'Creatinine Clearance (if applicable): 33.2 mL/min Results from last 7 days Lab Units 01/19/24 2136 WBC k/uL 11.75',
      annot_link: 'https://example.com/annot1'
    },
    {
      date: '01/02/2024',
      text: 'Pertinent labs include: sodium 134, chloride 97, serum Co2 21, anion gap 16',
      annot_link: 'https://example.com/annot2'
    },
    {
      date: '01/02/2024',
      text: 'Neurological: Mental Status: She is alert and oriented to person, place, and time.',
      annot_link: 'https://example.com/annot3'
    }, {
      date: '01/02/2024',
      text: 'Creatinine Clearance (if applicable): 33.2 mL/min Results from last 7 days Lab Units 01/19/24 2136 WBC k/uL 11.75',
      annot_link: 'https://example.com/annot1'
    },
    {
      date: '01/02/2024',
      text: 'Pertinent labs include: sodium 134, chloride 97, serum Co2 21, anion gap 16',
      annot_link: 'https://example.com/annot2'
    },
    {
      date: '01/02/2024',
      text: 'Neurological: Mental Status: She is alert and oriented to person, place, and time.',
      annot_link: 'https://example.com/annot3'
    }
    // Add more objects dynamically here
  ];

}
