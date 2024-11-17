import { Injectable } from '@angular/core';
import { BREADCRUMBS } from './breadcrumbs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private breadcrumbData = BREADCRUMBS;

  constructor() {}
  getBreadcrumbs(route: string): { crumbs: string[]; description?: string } {
    return this.breadcrumbData[route] || { crumbs: [] };
  }
}
