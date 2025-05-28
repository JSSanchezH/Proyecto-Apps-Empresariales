import { Component } from '@angular/core';
import { InputFieldComponent } from '../../../shared/input-field/input-field.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';



@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [InputFieldComponent, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {

  form = {
    id: "",
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    phone: '',
    role: '',
    headquarter: '',
    department: '',
    urlFoto: ''
  };

  fields = [
    { icon: 'bx bxs-id-card', type: 'text', placeholder: 'ID' },
    { icon: 'bx bxs-user', type: 'text', placeholder: 'First Name' },
    { icon: 'bx bxs-user', type: 'text', placeholder: 'Last Name' },
    { icon: 'bx bx-envelope', type: 'text', placeholder: 'Email' },
    { icon: 'bx bx-phone', type: 'text', placeholder: 'Phone Number' },
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
    },
    { icon: 'bx bx-aperture', type: 'text', placeholder: 'url photo' },
  ];

  onSubmit() {
    console.log('Form submitted:', this.form);
  }

}
