import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
// import { AuthModule } from './auth/auth.module';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { DashboardComponent } from './Modules/dashboard/dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    DashboardComponent,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // title = 'clean-claim';
  // isExpanded = true;
  isSidebarOpen = true;

  constructor(private router: Router) {
    console.log('MAin component loaded');
  }

  shouldShowLayout(): boolean {
    const hiddenRoutes = ['/', '/login', '/signup', '/reset'];
    return !hiddenRoutes.includes(this.router.url);
  }

  // Method to toggle sidebar
  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
