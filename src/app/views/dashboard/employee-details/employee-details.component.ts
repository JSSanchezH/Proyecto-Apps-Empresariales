import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { EmployeeService } from '../../../services/employee.service';
import { Router, RouterLink } from '@angular/router';

import { Employee } from '../../../model/employee.model';
@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [CommonModule, ButtonComponent, RouterLink],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css',
})
export class EmployeeDetailsComponent {
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  employees: Employee[] = [];
  displayedEmployees: Employee[] = [];

  initialEmployeeCount = 5;

  ngOnInit(): void {
    this.employeeService.getCompanyData().subscribe((employees) => {
      this.employees = employees as Employee[];
      this.displayedEmployees = this.employees.slice(
        0,
        this.initialEmployeeCount
      );
    });
  }

  dismissEmployee(employee: Employee) {
    const updatedEmployee = { ...employee, status: false };

    this.employeeService.dismissEmployee(updatedEmployee).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']).then(() => {
          window.location.reload();
        });

        employee.status = false; // Actualiza la UI
      },
      error: (error) => {
        console.error('Error dismissing employee:', error);
      },
    });
  }
  loadMore() {
    const nextCount = this.displayedEmployees.length + 5;
    this.displayedEmployees = this.employees.slice(0, nextCount);
  }

  loadLess() {
    this.displayedEmployees = this.employees.slice(
      0,
      this.initialEmployeeCount
    );
  }
}
