import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../shared/button/button.component';
import { EmployeeService } from '../../../services/employee.service';
import { Router, RouterLink } from '@angular/router';
import { Payroll } from '../../../model/payroll.model';

@Component({
  selector: 'app-payrolls-details',
  standalone: true,
  imports: [ CommonModule, ButtonComponent, RouterLink],
  templateUrl: './payrolls-details.component.html',
  styleUrl: './payrolls-details.component.css'
})
export class PayrollsDetailsComponent {

  constructor(
    private employeeService: EmployeeService, 
    private router: Router
  ) {}

  payrolls: Payroll[] = [];
  displayedPayrolls: Payroll[] = [];

  initialPayrollsCount = 5;
  

  ngOnInit(){
    this.employeeService.getPayrolls().subscribe((payrolls) => {
      this.payrolls = payrolls as Payroll[];
      this.displayedPayrolls = this.payrolls.slice(0, this.initialPayrollsCount);
    });
  }

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
