// dashboard.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  selectedOption: string = '';
  today: string = '';
  expandedProducts: { [key: string]: boolean } = {};

  ngOnInit() {
    this.updateDate();
    // Update the date every day at midnight
    setInterval(() => {
      this.updateDate();
    }, 86400000); // 24 hours in milliseconds
  }

  updateDate() {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    const options = { month: 'long', day: 'numeric', year: 'numeric' } as Intl.DateTimeFormatOptions;
    this.today = yesterday.toLocaleDateString('en-US', options);
  }

  toggleProducts(category: string): void {
    this.expandedProducts[category] = !this.expandedProducts[category];
  }

  isExpanded(category: string): boolean {
    return this.expandedProducts[category];
  }
}
