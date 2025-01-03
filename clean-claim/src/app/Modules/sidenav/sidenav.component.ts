import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatIcon, CommonModule, RouterModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  constructor(private router: Router){};
  isCollapsed = true;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

}
