// login.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  selectedUserType: string = '';
  userId: string = '';
  password: string = '';
  showPassword: boolean = false;
  errorMessage: string = '';
  captchaLength: number = 6;
  captchaImage: string = '';
  enteredCaptcha: string = '';

  constructor(private router: Router) {
    this.refreshCaptcha();
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  login() {
    const validCredentials = this.validateCredentials();
    const validCaptcha = this.validateCaptcha();

    if (validCredentials && validCaptcha) {
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Invalid credentials. Please try again!';
      this.refreshCaptcha();
    }
  }

  validateCredentials(): boolean {

    const officeCredentials1 = { userId: '23092', password: 'anujaraju', userType: 'office' };
    const officeCredentials2 = { userId: '40120', password: 'adithya', userType: 'office' };
    const officeCredentials3 = { userId: '98765', password: 'cyril', userType: 'office' };
    const branchCredentials1 = { userId: '12345', password: '54321', userType: 'branch' };
    const branchCredentials2 = { userId: '56789', password: '98765', userType: 'branch' };


    switch (this.selectedUserType) {
      case 'office':
        return (
          this.userId === officeCredentials1.userId && this.password === officeCredentials1.password ||
          this.userId === officeCredentials2.userId && this.password === officeCredentials2.password ||
          this.userId === officeCredentials3.userId && this.password === officeCredentials3.password
        );
      case 'branch':
        return (
          this.userId === branchCredentials1.userId && this.password === branchCredentials1.password ||
          this.userId === branchCredentials2.userId && this.password === branchCredentials2.password
        );
      default:
        return false;
    }
  }

  generateCaptchaCode(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * characters.length);
      captcha += characters[index];
    }
    return captcha;
  }

  validateCaptcha(): boolean {
    return this.enteredCaptcha.toLowerCase() === this.captchaImage.toLowerCase();
  }

  refreshCaptcha() {
    this.captchaImage = this.generateCaptchaCode(this.captchaLength);
    this.enteredCaptcha = '';
  }
  navigateToSignup() {

    this.router.navigate(['/signup']);
  }
}

