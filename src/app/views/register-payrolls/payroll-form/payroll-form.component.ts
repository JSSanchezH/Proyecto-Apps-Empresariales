import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from '../../../shared/input-field/input-field.component';

@Component({
  selector: 'app-payroll-form',
  standalone: true,
  imports: [CommonModule, InputFieldComponent],
  templateUrl: './payroll-form.component.html',
  styleUrl: './payroll-form.component.css'
})
export class PayrollFormComponent {

  @Output() close = new EventEmitter<void>();

  form = {
    paymentDate: '',
    baseSalary: '',
    bonuses: '',
    totalPayment: '',
    paymentMethod: ''
  };

  fields = [
    { label: 'Payment Date', icon: 'bx bx-calendar', type: 'date', placeholder: 'Payment Date' },
    { label: 'Base Salary', icon: 'bx bx-dollar', type: 'number', placeholder: 'Base Salary' },
    { label: 'Bonuses', icon: 'bx bx-gift', type: 'number', placeholder: 'Bonuses' },
    { label: 'Total Payment', icon: 'bx bx-calculator', type: 'number', placeholder: 'Total Payment' },
    {
      label: 'Payment Method',
      icon: 'bx bx-credit-card',
      type: 'select',
      placeholder: 'Select Method',
      options: ['Bank Transfer', 'Cash', 'Check', 'Cryptocurrency']
    }
  ];

  closeForm() {
    this.close.emit();
  }

  onSubmit() {
    console.log('Payment info registered:', this.form);
  }
  
}
