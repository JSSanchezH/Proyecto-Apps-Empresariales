import { Component, ElementRef, ViewChild } from '@angular/core';
import { TopbarComponent } from '../../shared/topbar/topbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    TopbarComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoginFormComponent,
    RegisterFormComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  isRegister = false;

  toggleRegister() {
    this.isRegister = true;
  }

  toggleSignIn() {
    this.isRegister = false;
  }

  ngOnInit(): void {
    // Toggle menu functionality
    const toggle = document.querySelector('.toggle');
    const container = document.querySelector('.container');
    const nav = document.querySelector('.nav');

    toggle?.addEventListener('click', () => {
      container?.classList.toggle('active');
      nav?.classList.toggle('active');
    });
  }
}
