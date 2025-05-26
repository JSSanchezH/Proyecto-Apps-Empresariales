import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from '../../../shared/input-field/input-field.component';

@Component({
  selector: 'app-edit-form',
  standalone: true,
  imports: [CommonModule, InputFieldComponent],
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.css'
})
export class EditFormComponent {

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
      icon: 'bx bx-credit-card',
      type: 'select',
      placeholder: 'Select Payment Method',
      options: ['Cash ', 'Credit Card', 'Bank']
    }
  ];

  onSubmit() {
    console.log('Payment info submitted:', this.form);
  }

}
