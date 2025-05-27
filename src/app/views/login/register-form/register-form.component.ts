import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { InputFieldComponent } from '../../../shared/input-field/input-field.component';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputFieldComponent],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css',
})
export class RegisterFormComponent {
  fields = [
    {
      icon: 'bx bx-buildings',
      type: 'text',
      placeholder: 'Name of company',
      name: 'name',
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
      name: 'typeIndustry',
    },
    {
      icon: 'bx bx-aperture',
      type: 'text',
      placeholder: 'Logo',
      name: 'urlLogo',
    },
    {
      icon: 'bx bxs-user',
      type: 'text',
      placeholder: 'Username',
      name: 'userName',
    },
    {
      icon: 'bx bx-lock-alt',
      type: 'password',
      placeholder: 'Password',
      name: 'password',
    },
  ];

  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registerForm = this.fb.group({
      // Campos de company
      name: ['', Validators.required],
      nit: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      typeIndustry: ['', Validators.required],
      urlLogo: ['', Validators.required],

      // Campos de user
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  markAllAsTouched() {
    Object.values(this.registerForm.controls).forEach((control) => {
      control.markAsTouched();
    });
  }
  errorMessage: string = '';
  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    const formValue = this.registerForm.value;

    const payload = {
      company: {
        name: formValue.name,
        nit: formValue.nit,
        address: formValue.address,
        email: formValue.email,
        typeIndustry: formValue.typeIndustry,
        urlLogo: formValue.urlLogo,
      },
      user: {
        userName: formValue.userName,
        password: formValue.password,
      },
    };

    this.authService.register(payload).subscribe({
      next: (response) => {
        // console.log('Registration successful:', response);

        this.registerForm.reset();
      },
      error: (error) => {
        // console.error('Registration failed:', error);
        if (typeof error.error === 'string') {
          this.errorMessage = error.error; // guardar para mostrar en HTML
        } else {
          this.errorMessage = 'Something went wrong';
        }
      },
    });
  }
}
