import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../../services/employee.service';
import { Router, RouterLink } from '@angular/router';

import { Employee } from '../../../model/employee.model';

@Component({
  selector: 'app-employees-schedule',
  standalone: true,
  imports: [ButtonComponent, CommonModule, RouterLink],
  templateUrl: './employees-schedule.component.html',
  styleUrl: './employees-schedule.component.css'
})
export class EmployeesScheduleComponent {

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  @Output() showForm = new EventEmitter<number>();

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

    assignSchedule(employee: Employee) {
      this.showForm.emit(employee.id); 
    }
}
