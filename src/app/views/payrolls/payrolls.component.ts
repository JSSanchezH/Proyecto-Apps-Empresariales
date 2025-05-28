import { Component } from '@angular/core';
import { TopbarComponent } from '../../shared/topbar/topbar.component';
import { PayrollsDetailsComponent } from './payrolls-details/payrolls-details.component';
import { RegisterPayrollComponent } from './register-payroll/register-payroll.component';

@Component({
  selector: 'app-payrolls',
  standalone: true,
  imports: [TopbarComponent, PayrollsDetailsComponent, RegisterPayrollComponent],
  templateUrl: './payrolls.component.html',
  styleUrl: './payrolls.component.css'
})
export class PayrollsComponent {

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
