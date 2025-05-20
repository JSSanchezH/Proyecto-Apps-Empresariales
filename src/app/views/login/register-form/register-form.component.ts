import { Component } from '@angular/core';
import { InputFieldComponent } from '../../../shared/input-field/input-field.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [InputFieldComponent, CommonModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css',
})
export class RegisterFormComponent {
  form = {
    companyName: '',
    nit: '',
    address: '',
    email: '',
    industryType: '',
    logo: '',
    username: '',
    password: '',
  };

  fields = [
    {
      icon: 'bx bx-buildings',
      type: 'text',
      placeholder: 'Name of company',
      name: 'companyName',
    },
    { icon: 'bx bxs-id-card', type: 'text', placeholder: 'NIT', name: 'nit' },
    {
      icon: 'bx bx-street-view',
      type: 'text',
      placeholder: 'Address',
      name: 'address',
    },
    {
      icon: 'bx bx-envelope',
      type: 'text',
      placeholder: 'Email',
      name: 'email',
    },
    {
      icon: 'bx bxs-school',
      type: 'text',
      placeholder: 'Type industry',
      name: 'industryType',
    },
    { icon: 'bx bx-aperture', type: 'text', placeholder: 'Logo', name: 'logo' },
    {
      icon: 'bx bxs-user',
      type: 'text',
      placeholder: 'Username',
      name: 'username',
    },
    {
      icon: 'bx bx-lock-alt',
      type: 'password',
      placeholder: 'Password',
      name: 'password',
    },
  ];

  onSubmit() {
    console.log('Register form submitted:', this.form);
  }
}
