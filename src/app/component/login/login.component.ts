import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
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
    // Validate only the userId and password
    const validUserId = this.userId.trim() !== '';  // Adjust the condition based on your requirements
    const validPassword = this.password.trim() !== '';  // Adjust the condition based on your requirements

    return validUserId && validPassword;
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
