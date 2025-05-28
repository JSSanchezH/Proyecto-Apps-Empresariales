import { Component } from '@angular/core';
import { TopbarComponent } from '../../shared/topbar/topbar.component';
import { RegisterHeadquarterFormComponent } from './register-headquarter-form/register-headquarter-form.component';

@Component({
  selector: 'app-register-headquarter',
  standalone: true,
  imports: [RegisterHeadquarterFormComponent, TopbarComponent],
  templateUrl: './register-headquarter.component.html',
  styleUrl: './register-headquarter.component.css'
})
export class RegisterHeadquarterComponent {

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
