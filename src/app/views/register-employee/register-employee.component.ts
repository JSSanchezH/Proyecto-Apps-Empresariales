import { Component } from '@angular/core';

@Component({
  selector: 'app-register-employee',
  standalone: true,
  imports: [],
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
