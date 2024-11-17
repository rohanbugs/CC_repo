import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
// import { AuthModule } from './auth/auth.module';

import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,RouterModule ,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clean-claim';
}
