import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../../services/employee.service';
import { Employee } from '../../../model/employee.model';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsComponent {
  employees: Employee[] = [];
  headquarters: any[] = [];
  departments: any[] = [];
  cards = [
    { number: 0, name: 'Employees', icon: 'bx bx-user-plus' },
    { number: 0, name: 'Headquarters', icon: 'bx bxs-buildings' },
    { number: 0, name: 'Departments', icon: 'bx bxs-map-pin' },
    { number: 0, name: 'Absences', icon: 'bx bxs-door-open' },
  ];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    this.employeeService.getEmployees().subscribe((employees) => {
      this.employees = employees;

      const activeEmployees = this.employees.filter((emp) => emp.status);
      this.cards[0].number = activeEmployees.length;
    });

    this.employeeService.getHeadquarters().subscribe((hq) => {
      this.cards[1].number = hq.length;
    });

    this.employeeService.getDepartments().subscribe((departments) => {
      this.cards[2].number = departments.length;
    });

    // this.employeeService.getAbsences().subscribe((absences) => {
    //   this.cards[3].number = absences.length;
    // });
  }
}
