import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { map, Observable } from 'rxjs';
import { Employee } from '../model/employee.model';
import { Headquarter } from '../model/headquarter.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient, private authService: AuthService) {}

private getHeaders(): HttpHeaders {
  const stored = localStorage.getItem('apiKey');
  let apiKey = '';

  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      apiKey = parsed.apiKey || '';
    } catch {
      
      apiKey = stored;
    }
  }

  return new HttpHeaders({
    'x-api-key': apiKey,
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

  getHeadquarters(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/headquarters`, {
      headers: this.getHeaders(),
    });
  }

  getHeadquarterById(id: number): Observable<Headquarter> {
    return this.http.get<Headquarter>(`${this.apiUrl}/headquarters/${id}`, {
      headers: this.getHeaders(),
    });
  }

  deleteHeadquarter(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/headquarters/${id}`, {
      headers: this.getHeaders(),
    });
  }

  updateHeadquarter(headquarter: any): Observable<any> {
    return this.http.put(
      `${this.apiUrl}/headquarters/${headquarter.id}`,
      headquarter,
      {
        headers: this.getHeaders(),
      }
    );
  }

  createHeadquarter(headquarter: any) {
    return this.http.post(`${this.apiUrl}/headquarters`, headquarter, {
      headers: this.getHeaders(),
      responseType: 'text',
    });
  }
  //------------------------------------------ Deparments ------------------------------------------

  getDepartmentById(departmentId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/departments/${departmentId}`, {
      headers: this.getHeaders(),
    });
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

  deleteDepartment(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/departments/${id}`, {
      headers: this.getHeaders(),
    });
  }

  updateDepartment(department: any): Observable<any> {
    return this.http.put(
      `${this.apiUrl}/departments/${department.id}`,
      department,
      {
        headers: this.getHeaders(),
      }
    );
  }

  createDepartment(department: any) {
    return this.http.post(`${this.apiUrl}/departments`, department, {
      headers: this.getHeaders(),
      responseType: 'text',
    });
  }

  //------------------------------------------ Payroll ------------------------------------------

  getPayrollById(payrollId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/payrolls/${payrollId}`, {
      headers: this.getHeaders(),
    });
  }

  getPayrolls(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/payrolls`, {
      headers: this.getHeaders(),
    });
  }
  //------------------------------------------ Schedules ------------------------------------------

  getSchedulesById(scheduleId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/schedules/${scheduleId}`, {
      headers: this.getHeaders(),
    });
  }

  getSchedules(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/schedules`, {
      headers: this.getHeaders(),
    });
  }

  createSchedule(schedule: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/schedules`, schedule, {
      headers: this.getHeaders(),
      responseType: 'text',
    });
  }

  //------------------------------------------ Absences ------------------------------------------

  getAbsencesById(absenceId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/absences/${absenceId}`, {
      headers: this.getHeaders(),
    });
  }

  getAbsences(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/absences`, {
      headers: this.getHeaders(),
    });
  }

  //------------------------------------------ Location ------------------------------------------

  getContinents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/continents`, {});
  }

  getCountriesByContinent(
    continentId: number
  ): Observable<{ id: number; name: string }[]> {
    return this.http
      .get<any[]>(`${this.apiUrl}/countries/continent/${continentId}`, {
        headers: this.getHeaders(),
      })
      .pipe(
        map((departments) =>
          departments.map((dept) => ({ id: dept.id, name: dept.name }))
        )
      );
  }

  getStatesByCountry(
    continentId: number
  ): Observable<{ id: number; name: string }[]> {
    return this.http
      .get<any[]>(`${this.apiUrl}/states/country/${continentId}`, {
        headers: this.getHeaders(),
      })
      .pipe(
        map((departments) =>
          departments.map((dept) => ({ id: dept.id, name: dept.name }))
        )
      );
  }

  getCitiesByState(
    continentId: number
  ): Observable<{ id: number; name: string }[]> {
    return this.http
      .get<any[]>(`${this.apiUrl}/cities/state/${continentId}`, {
        headers: this.getHeaders(),
      })
      .pipe(
        map((departments) =>
          departments.map((dept) => ({ id: dept.id, name: dept.name }))
        )
      );
  }

  getCountries(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/contries`, {});
  }
}
