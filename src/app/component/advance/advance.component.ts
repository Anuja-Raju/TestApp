import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-advance',
  templateUrl: './advance.component.html',
  styleUrl: './advance.component.css'
})
export class AdvanceComponent implements OnInit{
  
  yesterday: Date;
  expandedProducts: { [key: string]: boolean } = {};
  advanceDataSum: any;

  constructor(private router: Router,private authService: AuthService) {
    // Calculate yesterday's date
    const today = new Date();
    this.yesterday = new Date(today);
    this.yesterday.setDate(today.getDate() - 1);
    // this.getAdvanceDataSum()
  }
  ngOnInit(){
    this.fetchAdvanceDataSum();
  }

  toggleProducts(category: string): void {
    this.expandedProducts[category] = !this.expandedProducts[category];
  }

  isExpanded(category: string): boolean {
    return this.expandedProducts[category];
  }

  // getAdvanceDataSum(){
  //   this.authService.getAdvanceDataSum().subscribe(
  //     {
  //       next:data=>{
  //         console.log(data)
  //       }
  //     }
  //   )
  // }

  fetchAdvanceDataSum() {
    this.authService.getAdvanceDataSum().subscribe(
      (data: any) => {
        this.advanceDataSum = data;
      },
      (error: any) => {
        console.error('Error fetching new customer sum of the year :', error);
      }
    );
  }
  productCategories = [
    {
      name: 'Agri Loan',
      displayName: 'Agri Loan',
      products: [
        { displayName: 'ESAF Loan against Gold for Agriculturist' },
        { displayName: 'ELAGA75' },
        // Add more products as needed
      ],
    },
    // Repeat the structure for other categories
  ];

}
