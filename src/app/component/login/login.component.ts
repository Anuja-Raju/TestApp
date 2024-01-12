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
    // Only navigate to the next page without validation
    this.router.navigate(['/dashboard']);
  }

  validateCaptcha(): boolean {
    // Add your captcha validation logic here
    return this.enteredCaptcha.toLowerCase() === this.captchaImage.toLowerCase();
  }

  refreshCaptcha() {
    // Generate a new captcha
    this.captchaImage = this.generateCaptchaCode(this.captchaLength);
    this.enteredCaptcha = '';
  }

  generateCaptchaCode(length: number): string {
    // Your captcha generation logic here
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * characters.length);
      captcha += characters[index];
    }
    return captcha;
  }

  navigateToSignup() {
    this.router.navigate(['/signup']);
  }
}
