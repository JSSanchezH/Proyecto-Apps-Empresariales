import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../shared/button/button.component';

@Component({
  selector: 'app-payrolls-details',
  standalone: true,
  imports: [ CommonModule, ButtonComponent],
  templateUrl: './payrolls-details.component.html',
  styleUrl: './payrolls-details.component.css'
})
export class PayrollsDetailsComponent {

  payrolls = [
    { employee:'Juan Sanchez', payment_Date: '2023-08-01', base_Salary: 3000, bonuses : 500, total_Payment: 3500, payment_Method: 'Bank'},
    { employee:'Miguel Patiño', payment_Date: '2023-08-01', base_Salary: 3200, bonuses : 600, total_Payment: 3800, payment_Method: 'Cash'},
    { employee:'Carlos Perez', payment_Date: '2023-08-01', base_Salary: 3100, bonuses : 550, total_Payment: 3650, payment_Method: 'Bank'},
    { employee:'Ana Garcia', payment_Date: '2023-08-01', base_Salary: 2900, bonuses : 450, total_Payment: 3350, payment_Method: 'Cash'},
    { employee:'Luis Ramirez', payment_Date: '2023-08-01', base_Salary: 3300, bonuses : 700, total_Payment: 4000, payment_Method: 'Bank'},
    { employee:'Leo Fernandez', payment_Date: '2023-08-01', base_Salary: 3400, bonuses : 800, total_Payment: 4200, payment_Method: 'Cash'},
    { employee:'David Gomez', payment_Date: '2023-08-01', base_Salary: 2800, bonuses : 400, total_Payment: 3200, payment_Method: 'Bank'},
    { employee:'Sofia Martin', payment_Date: '2023-08-01', base_Salary: 3000, bonuses : 500, total_Payment: 3500, payment_Method: 'Cash'},
    { employee:'Jorge Ruiz', payment_Date: '2023-08-01', base_Salary: 3100, bonuses : 550, total_Payment: 3650, payment_Method: 'Bank'},
    { employee:'Laura Torres', payment_Date: '2023-08-01', base_Salary: 2900, bonuses : 450, total_Payment: 3350, payment_Method: 'Cash'},
    { employee:'Pablo Morales', payment_Date: '2023-08-01', base_Salary: 3300, bonuses : 700, total_Payment: 4000, payment_Method: 'Bank'},
    { employee:'Natalia Castro', payment_Date: '2023-08-01', base_Salary: 3400, bonuses : 800, total_Payment: 4200, payment_Method: 'Cash'},
    { employee:'Andres Herrera', payment_Date: '2023-08-01', base_Salary: 2800, bonuses : 400, total_Payment: 3200, payment_Method: 'Bank'},
    { employee:'Valentina Ortega', payment_Date: '2023-08-01', base_Salary: 3000, bonuses : 500, total_Payment: 3500, payment_Method: 'Cash'},
  ];

  initialPayrollsCount = 5;
  displayedPayrolls = this.payrolls.slice(0, this.initialPayrollsCount);

  loadMorePayrolls() {
    const nextCount = this.displayedPayrolls.length + 5;
    this.displayedPayrolls = this.payrolls.slice(0, nextCount);
  }

  loadLessPayrolls() {
    this.displayedPayrolls = this.payrolls.slice(
      0, 
      this.initialPayrollsCount);
  }
}
