import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advance',
  templateUrl: './advance.component.html',
  styleUrl: './advance.component.css'
})
export class AdvanceComponent {
  
  yesterday: Date;
  expandedProducts: { [key: string]: boolean } = {};

  constructor(private router: Router) {
    // Calculate yesterday's date
    const today = new Date();
    this.yesterday = new Date(today);
    this.yesterday.setDate(today.getDate() - 1);
  }

  toggleProducts(category: string): void {
    this.expandedProducts[category] = !this.expandedProducts[category];
  }

  isExpanded(category: string): boolean {
    return this.expandedProducts[category];
  }

}
