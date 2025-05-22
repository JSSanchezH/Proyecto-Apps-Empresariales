import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from '../../../shared/input-field/input-field.component';

@Component({
  selector: 'app-register-deparment-form',
  standalone: true,
  imports: [CommonModule, InputFieldComponent],
  templateUrl: './register-deparment-form.component.html',
  styleUrl: './register-deparment-form.component.css'
})
export class RegisterDeparmentFormComponent {

  form = {
    name: '',
    headquarter: ''
  };

  fields = [
    { label: 'Name', icon: 'bx bx-briefcase', type: 'text', placeholder: 'Department Name' },
    {
      label: 'Headquarter',
      icon: 'bx bx-buildings',
      type: 'select',
      placeholder: 'Select Headquarter',
      options: ['New York Office', 'Los Angeles Office', 'London Office', 'Miami Office', 'Chicago Office']
    }
  ];

  onSubmit() {
    console.log('Department info registered:', this.form);
  }

}
