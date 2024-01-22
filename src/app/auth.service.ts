// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://192.168.25.106:3000/'; // Replace with your actual backend API URL

  constructor(private http: HttpClient) {}

  Signup(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}signup`, data);
  }

  Login(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}login`, data);
  }
}
