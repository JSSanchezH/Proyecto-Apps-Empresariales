import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  private getHeaders(): HttpHeaders {
    const apiKey = localStorage.getItem('apiKey');
    return new HttpHeaders({
      'x-api-key': apiKey || '',
    });
  }

  getCompanyData() {
    const apiKey = this.authService.getApiKey();
    return this.http.get('http://localhost:8009/employees', {
      headers: this.getHeaders(),
    });
  }
}
