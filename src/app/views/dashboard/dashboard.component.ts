import { Component } from '@angular/core';
import { TopbarComponent } from './topbar/topbar.component';
import { CardsComponent } from './cards/cards.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';

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
  ngOnInit(): void {
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
