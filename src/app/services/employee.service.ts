import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { map, Observable } from 'rxjs';
import { Employee } from '../model/employee.model';

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
  private apiUrl = 'http://localhost:8009';
  getCompanyData() {
    const apiKey = this.authService.getApiKey();
    return this.http.get(`${this.apiUrl}/employees`, {
      headers: this.getHeaders(),
    });
  }

  updateEmployee(employee: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/employees/${employee.id}`, employee, {
      headers: this.getHeaders(),
    });
  }

  dismissEmployee(employee: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/employees/${employee.id}`, employee, {
      headers: this.getHeaders(),
    });
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/employees/${id}`, {
      headers: this.getHeaders(),
    });
  }

  //------------------------------------------ Roles ------------------------------------------

  getRoles(): Observable<string[]> {
    return this.http
      .get<any[]>(`${this.apiUrl}/roles`, {})
      .pipe(map((roles) => roles.map((role) => role.name)));
  }

  getHeadquarters(): Observable<string[]> {
    return this.http
      .get<any[]>(`${this.apiUrl}/headquarters`, { headers: this.getHeaders() })
      .pipe(
        map((headquarters) =>
          headquarters.map((headquarters) => headquarters.name)
        )
      );
  }
}
