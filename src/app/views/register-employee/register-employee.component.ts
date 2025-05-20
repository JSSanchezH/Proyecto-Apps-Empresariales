import { Component } from '@angular/core';
import { RegisterFormComponent } from './register-form/register-form.component';

@Component({
  selector: 'app-register-employee',
  standalone: true,
  imports: [
    RegisterFormComponent,
  ],
  templateUrl: './register-employee.component.html',
  styleUrl: './register-employee.component.css'
})
export class RegisterEmployeeComponent {

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
