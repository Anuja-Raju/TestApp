// dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  selectedOption: string = '';
  today: string = '';
  totalDepositAmount: number = 0; // Example value, replace with actual data
  totalAdvanceAmount: number = 0; // Example value, replace with actual data
  totalBusinessAmount: number = 0; // Example value, replace with actual data

  constructor(private router: Router) {}

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

  onSelectChange(): void {
    console.log('Selected Option:', this.selectedOption);
    if (this.selectedOption === 'deposit') {
      console.log('Navigating to deposit');
      this.router.navigate(['/deposit']);
    }
    if (this.selectedOption === 'advance') {
      console.log('Navigating to advance');
      this.router.navigate(['/advance']);
    }
    // Handle other options if needed
  }
  
}
