// signup.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  selectedUserType: string = '';
  userId: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  submitForm() {
    // Check if values are entered
    if (!this.selectedUserType || !this.userId || !this.password || !this.confirmPassword) {
      this.errorMessage = 'Please fill in all fields.';
      return;
    }

    // Your form submission logic here
    console.log('Form submitted');
    console.log('User Type:', this.selectedUserType);
    console.log('User ID:', this.userId);
    console.log('Password:', this.password);
    console.log('Confirm Password:', this.confirmPassword);

    // Reset error message
    this.errorMessage = '';

    this.navigateToLogin();
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  
}
