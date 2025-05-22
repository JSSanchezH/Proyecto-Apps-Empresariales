import { Component } from '@angular/core';
import { TopbarComponent } from '../../shared/topbar/topbar.component';
import { RegisterDeparmentFormComponent } from './register-deparment-form/register-deparment-form.component';

@Component({
  selector: 'app-register-deparment',
  standalone: true,
  imports: [TopbarComponent, RegisterDeparmentFormComponent],
  templateUrl: './register-deparment.component.html',
  styleUrl: './register-deparment.component.css'
})
export class RegisterDeparmentComponent {

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
