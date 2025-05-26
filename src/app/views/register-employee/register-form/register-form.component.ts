import { Component } from '@angular/core';
import { InputFieldComponent } from '../../../shared/input-field/input-field.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [InputFieldComponent, CommonModule, FormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {

  form = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: '',
    headquarter: '',
    department: ''
  };

  fields = [
    { icon: 'bx bxs-user', type: 'text', placeholder: 'First Name' },
    { icon: 'bx bxs-user', type: 'text', placeholder: 'Last Name' },
    { icon: 'bx bx-envelope', type: 'text', placeholder: 'Email' },
    { icon: 'bx bx-phone', type: 'text', placeholder: 'Phone number' },
    {
      icon: 'bx bxs-color',
      type: 'select',
      placeholder: 'Select Role',
      options: ['Role 1', 'Role 2', 'Role 3']
    },
    {
      icon: 'bx bx-user-voice',
      type: 'select',
      placeholder: 'Select Headquarter',
      options: ['Headquarter 1', 'Headquarter 2', 'Headquarter 3']
    },
    {
      icon: 'bx bx-buildings',
      type: 'select',
      placeholder: 'Select Department',
      options: ['Department 1', 'Department 2', 'Department 3']
    }
  ];

  onSubmit() {
    console.log('Form submitted:', this.form);
  }

}
