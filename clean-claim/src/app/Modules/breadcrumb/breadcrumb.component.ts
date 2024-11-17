import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { BreadcrumbService } from './breadcrumb-service/breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})

export class BreadcrumbComponent implements OnInit {
  breadcrumb: string[] = [];
  description?: string;

  constructor(
    private router: Router,
    private breadcrumbService: BreadcrumbService
  ) {}

  ngOnInit(): void {
    // Listen for route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateBreadcrumb();
    });

    // Initially load breadcrumb
    this.updateBreadcrumb();
  }

  private updateBreadcrumb(): void {
    const routePath = this.router.url.split('?')[0]; // Get the current route without query params
    const { crumbs, description } = this.breadcrumbService.getBreadcrumbs(routePath);
    this.breadcrumb = crumbs;
    this.description = description;
  }
}