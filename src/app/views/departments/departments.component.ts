import { Component } from '@angular/core';
import { TopbarComponent } from '../../shared/topbar/topbar.component';
import { DepartmentsDetailsComponent } from './departments-details/departments-details.component';
import { RegisterDepartmentsComponent } from './register-departments/register-departments.component';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [TopbarComponent, DepartmentsDetailsComponent, RegisterDepartmentsComponent],
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.css'
})
export class DepartmentsComponent {

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
