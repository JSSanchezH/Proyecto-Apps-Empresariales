import { Component } from '@angular/core';
import { InputFieldComponent } from '../../../shared/input-field/input-field.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputFieldComponent,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  loginForm: FormGroup;
  loginError: string = '';

  inputs = [
    {
      iconClass: 'bx bxs-user',
      type: 'text',
      placeholder: 'Username',
      name: 'userName',
    },
    {
      iconClass: 'bx bx-lock-alt',
      type: 'password',
      placeholder: 'Password',
      name: 'password',
    },
  ];

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  errorMessage: string = '';

  markAllAsTouched() {
    Object.values(this.loginForm.controls).forEach((control) => {
      control.markAsTouched();
    });
  }
  onLoginSubmit() {
    if (this.loginForm.invalid) return;

    this.authService.login(this.loginForm.value).subscribe({
      next: (res) => {
        this.loginError = '';
        this.authService.saveApiKey(res);
        console.log('Login successful');
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        // console.error('Registration failed:', error);
        if (typeof err.error === 'string') {
          this.errorMessage = err.error; // guardar para mostrar en HTML
        } else {
          this.errorMessage = 'Something went wrong';
        }
      },
    });
  }
  validateAll() {
    this.loginForm.markAllAsTouched();
  }
}
