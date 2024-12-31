import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { worksheetModel } from '../../Schemas/worksheet';
import { WorksheetService } from '../../services/worksheet/worksheet.service';
@Component({
  selector: 'app-worksheet',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './worksheet.component.html',
  styleUrl: './worksheet.component.css'
})
export class WorksheetComponent implements OnInit{


  @Input() claimid!: string;
  tableData: worksheetModel[] = [];
  // billedDRG: string = '';
  // DRGWeight: string = '';


  // Possible options for MCC/CC/HAC
mccCcHacOptions: string[] = ['MCC', 'CC', 'HAC'];

  constructor(private worksheetservice:WorksheetService) { }

  ngOnInit(): void {
    console.log("WorksheetComponent initialized");
    this.getworksheetData();
    
    
  }

  getworksheetData(){
    this.worksheetservice.getWorksheetData(this.claimid).subscribe((data) => {
      this.tableData = data[0].coding_data;
     //  this.billedDRG = data[0].billed_drg; //for billed drg
     //  this.DRGWeight = data[0].drg_weight; //for drg weight
      console.log("data:", data.coding_data);
     });

  }

  // Use a Set to track which rows are in edit mode
  editingRows: Set<number> = new Set<number>();

  onButtonClick(row:worksheetModel,i: number) {
    if (this.isEditing(i)) {
      this.saveChanges(row);  // Call the additional method when the "Save" button is clicked
    }
    this.toggleEdit(i);  // Toggle the edit mode (either start editing or stop)
  }
  
  saveChanges(row:worksheetModel) {
    console.log('Changes saved', row);
    this.worksheetservice.updateWorksheetData(this.claimid,row).subscribe((response) => {
      if(response && response.message){
        console.log("Response:",response.message);
      }
      
     });
  }

  toggleEdit(index: number) {
    if (this.editingRows.has(index)) {
      this.editingRows.delete(index); // Save and disable editing
    } else {
      this.editingRows.add(index); // Enable editing
    }
  }

  isEditing(index: number): boolean {
    return this.editingRows.has(index);
  }

  // Method to cycle through options
changeMccCcHac(row: any, direction: number): void {
  const currentIndex = this.mccCcHacOptions.indexOf(row.mcc_cc_hac);
  let newIndex = currentIndex + direction;

  if (newIndex < 0) {
    newIndex = this.mccCcHacOptions.length - 1; // Wrap around to the last option
  } else if (newIndex >= this.mccCcHacOptions.length) {
    newIndex = 0; // Wrap around to the first option
  }
  row.mcc_cc_hac = this.mccCcHacOptions[newIndex];
}

}
