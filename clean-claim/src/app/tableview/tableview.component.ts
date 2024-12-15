import { Component, Input } from '@angular/core';
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

 @Input() tableData: any[] = [];

  constructor(private tabledataservice:TabledataService){}

  ngOnInit(): void {

  }

  // Helper method to get keys of an object
  getKeys(row: any): string[] {
    return Object.keys(row);
  }



}
