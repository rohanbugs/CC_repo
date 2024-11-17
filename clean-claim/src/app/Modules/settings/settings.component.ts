import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AccountComponent } from '../account/account.component';
import { SecurityComponent } from '../security/security.component';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [RouterOutlet,AccountComponent,SecurityComponent,RouterModule,BreadcrumbComponent,CommonModule
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {


}
