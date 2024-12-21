import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';


interface TableRow {
  srNo: number;
  dxCode: string;
  description: string;
  diagnosisPrimary: boolean;
  poa: boolean;
  affectsDRG: boolean;
  complicationComorbidity: string; // 'HCC', 'MCC', or 'CC'
  drg: number;
  weight: number;
}

@Component({
  selector: 'app-coding-worksheet',
  standalone: true,
  imports: [ CommonModule,
    FormsModule,           
    MatFormFieldModule,      
    MatSelectModule,        
    MatInputModule,
    MatTableModule ],
  templateUrl: './coding-worksheet.component.html',
  styleUrl: './coding-worksheet.component.css'
})


export class CodingWorksheetComponent {
  editMode: boolean = false;

  // Dropdown options for complicationComorbidity
  comorbidityOptions = ['HCC', 'MCC', 'CC'];

  // Table Data
  tableData: TableRow[] = [
    { srNo: 1, dxCode: 'A419', description: 'Sepsis, unspecified organism', diagnosisPrimary: true, poa: true, affectsDRG: true, complicationComorbidity: 'HCC', drg: 871, weight: 1.967 },
    { srNo: 2, dxCode: 'A481', description: 'Legionnaire\'s disease', diagnosisPrimary: false, poa: true, affectsDRG: false, complicationComorbidity: 'MCC', drg: 177, weight: 1.779 },
    { srNo: 3, dxCode: 'J690', description: 'Pneumonitis due to inhalation of food and vomit', diagnosisPrimary: true, poa: true, affectsDRG: false, complicationComorbidity: 'MCC', drg: 177, weight: 1.779 },
    { srNo: 4, dxCode: 'J9801', description: 'Acute respiratory failure with hyperoxias', diagnosisPrimary: false, poa: false, affectsDRG: false, complicationComorbidity: 'CC', drg: 189, weight: 1.207 },
    { srNo: 5, dxCode: 'N179', description: 'Acute kidney failure, unspecified', diagnosisPrimary: false, poa: true, affectsDRG: false, complicationComorbidity: 'HCC', drg: 70, weight: 1.724 },
    { srNo: 6, dxCode: 'G9341', description: 'Metabolic encephalopathy', diagnosisPrimary: false, poa: false, affectsDRG: false, complicationComorbidity: 'HCC', drg: 283, weight: 1.918 },
    { srNo: 7, dxCode: 'N390', description: 'Urinary tract infection, site not specified', diagnosisPrimary: false, poa: true, affectsDRG: false, complicationComorbidity: 'HCC', drg: 689, weight: 1.498 },
    { srNo: 8, dxCode: 'M6282', description: 'Rhabdomyolysis', diagnosisPrimary: false, poa: false, affectsDRG: false, complicationComorbidity: 'HCC', drg: 640, weight: 1.265 },
  ];

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  // Prevent invalid inputs for DRG and Weight columns
  onNumberInput(event: any) {
    const value = event.target.value;
    if (value < 0) event.target.value = 0;
  }

}
