import { Component } from '@angular/core';
import { TopbarComponent } from '../../shared/topbar/topbar.component';
import { CardsComponent } from './cards/cards.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import { AuthService } from '../../services/auth.service';
import { EmployeeService } from '../../services/employee.service';

interface Employee {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  hireDate: string;
  role: {
    id: number;
    name: string;
  };
  department: {
    id: number;
    name: string;
    headquarter: {
      id: number;
      name: string;
      address: string;
      phone: number;
      city: {
        id: number;
        name: string;
        state: {
          id: number;
          name: string;
          country: {
            id: number;
            name: string;
            continent: {
              id: number;
              name: string;
            };
          };
        };
      };
      company: {
        id: number;
        name: string;
        nit: number;
        address: string;
        email: string;
        typeIndustry: string;
        urlLogo: string;
      };
    };
  };
  urlFoto: string;
  status: boolean;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    TopbarComponent,
    CardsComponent,
    EmployeeDetailsComponent,
    RegisterEmployeeComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  constructor(
    private authService: AuthService,
    private employeeService: EmployeeService
  ) {}

  employees: Employee[] = [];

  ngOnInit(): void {
    this.employeeService.getCompanyData().subscribe((employees) => {
      this.employees = employees as Employee[];
      console.log('Employees:', this.employees);
    });
    // Toggle menu functionality
    const toggle = document.querySelector('.toggle');
    const container = document.querySelector('.container');
    const nav = document.querySelector('.nav');

    toggle?.addEventListener('click', () => {
      container?.classList.toggle('active');
      nav?.classList.toggle('active');
    });
  }
}
