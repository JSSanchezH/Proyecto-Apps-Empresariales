import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from '../../shared/input-field/input-field.component';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, InputFieldComponent],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {

  form = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: '',
    manager: '',
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
      placeholder: 'Select Manager',
      options: ['Manager 1', 'Manager 2', 'Manager 3']
    },
    {
      icon: 'bx bx-buildings',
      type: 'select',
      placeholder: 'Select Department',
      options: ['Department 1', 'Department 2', 'Department 3']
    }
  ];

  ngOnInit(): void {
    const toggle = document.querySelector('.toggle');
    const container = document.querySelector('.container');
    const nav = document.querySelector('.nav');

    toggle?.addEventListener('click', () => {
      container?.classList.toggle('active');
      nav?.classList.toggle('active');
    });
  }

  onSubmit() {
    console.log('Form submitted:', this.form);
  }
}
