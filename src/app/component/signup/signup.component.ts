// signup.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

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

  constructor(private router: Router, private authService: AuthService) {}

  submit() {
    console.log("submit");

    // Check if values are entered
    if (!this.selectedUserType || !this.userId || !this.password || !this.confirmPassword) {
      this.errorMessage = 'Please fill in all fields.';
      return;
    }

    // Your form submission logic here
    console.log('User Type:', this.selectedUserType);
    console.log('User ID:', this.userId);
    console.log('Password:', this.password);
    console.log('Confirm Password:', this.confirmPassword);

    // Reset error message
    this.errorMessage = '';

    // Assuming AuthService.Signup returns an observable
    this.authService.Signup({
      "user_id": this.userId,
      "password": this.password,
      "confirm_password": this.confirmPassword,
      "user_type": this.selectedUserType
    }).subscribe({
      next: data => {
        console.log('Signup successful:', data);

        // You can perform additional actions after successful signup if needed

        // For example, navigate to the login page
        this.navigateToLogin();
      },
      error: error => {
        console.error('Signup failed:', error);

        // Handle the error appropriately, you might want to display an error message to the user
        this.errorMessage = 'Signup failed. Please try again.';
      },
      complete: () => {
        // This block will be executed when the observable completes (optional)
        console.log('Signup process completed.');
      }
    });
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
