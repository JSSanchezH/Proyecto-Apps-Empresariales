import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesPayrollComponent } from './employees-payroll/employees-payroll.component';
import { PayrollFormComponent } from './payroll-form/payroll-form.component';
import { TopbarComponent } from '../../shared/topbar/topbar.component';

@Component({
  selector: 'app-register-payrolls',
  standalone: true,
  imports: [CommonModule, EmployeesPayrollComponent, PayrollFormComponent, TopbarComponent],
  templateUrl: './register-payrolls.component.html',
  styleUrl: './register-payrolls.component.css'
})
export class RegisterPayrollsComponent {

  isFormVisible = false;
  
  showForm() {
    this.isFormVisible = true;
  }

  hideForm() {
    this.isFormVisible = false;
  }

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
