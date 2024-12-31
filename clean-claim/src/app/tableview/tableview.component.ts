import { Component, Input } from '@angular/core';
import { NgFor, NgIf, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-tableview',
  standalone: true,
  imports: [NgFor,TitleCasePipe],
  templateUrl: './tableview.component.html',
  styleUrl: './tableview.component.css'
})
export class 
TableviewComponent {

 @Input() tableData: any[] = [];

  constructor(){}

  ngOnInit(): void {

  }

  // Helper method to get keys of an object
  getKeys(row: any): string[] {
    return Object.keys(row);
  }



}
