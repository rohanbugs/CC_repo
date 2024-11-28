import { Component } from '@angular/core';
import { TabledataService } from './tabledata.service';
import { NgFor, NgIf, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-tableview',
  standalone: true,
  imports: [NgFor,NgIf,TitleCasePipe],
  templateUrl: './tableview.component.html',
  styleUrl: './tableview.component.css'
})
export class TableviewComponent {

  tableData: any[] = [];

  constructor(private tabledataservice:TabledataService){}

  ngOnInit(): void {

    
    this.getVitalData('bc');

  }

  // Helper method to get keys of an object
  getKeys(row: any): string[] {
    return Object.keys(row);
  }

  getVitalData(vital: string): void {
    // Call the service method to fetch the data for the selected vital

    this.tabledataservice.getVitalData(vital).subscribe((data) => {
      this.tableData = data; // Update tableData with the response from the backend
    });
	// this.tabledataservice.getDummyVitalData(vital).subscribe((data) => {
	// 	this.tableData = data; // Update tableData with the response from the service
	//   });

	//   console.log("table:",this.tableData)

  }

}
