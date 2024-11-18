import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AccountComponent } from '../settings/account/account.component';
import { SecurityComponent } from '../settings/security/security.component';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [RouterOutlet,AccountComponent,SecurityComponent,RouterModule,BreadcrumbComponent,CommonModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {


}
