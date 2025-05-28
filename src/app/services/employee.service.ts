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

  createEmployee(employee: any) {
    return this.http.post(`${this.apiUrl}/employees`, employee, {
      headers: this.getHeaders(),
      responseType: 'text',
    });
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/employees`, {
      headers: this.getHeaders(),
    });
  }

  //------------------------------------------ Roles ------------------------------------------

  getRoles(): Observable<{ id: number; name: string }[]> {
    return this.http
      .get<any[]>(`${this.apiUrl}/roles`)
      .pipe(
        map((roles) => roles.map((role) => ({ id: role.id, name: role.name })))
      );
  }
  //------------------------------------------ Headquarters ------------------------------------------

  getHeadquarters(): Observable<string[]> {
    return this.http.get<any[]>(`${this.apiUrl}/headquarters`, {
      headers: this.getHeaders(),
    });
  }
  //------------------------------------------ Deparments ------------------------------------------

  getDepartmentById(departmentId: number): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/departments/headquarter/${departmentId}`,
      {
        headers: this.getHeaders(),
      }
    );
  }
  getDepartmentsByHeadquarter(
    headquarterId: number
  ): Observable<{ id: number; name: string }[]> {
    return this.http
      .get<any[]>(`${this.apiUrl}/departments/headquarter/${headquarterId}`, {
        headers: this.getHeaders(),
      })
      .pipe(
        map((departments) =>
          departments.map((dept) => ({ id: dept.id, name: dept.name }))
        )
      );
  }

  getDepartments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/departments`, {
      headers: this.getHeaders(),
    });
  }
}
