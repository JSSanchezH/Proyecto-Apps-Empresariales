import { Component } from '@angular/core';
import { EmployeesScheduleComponent } from './employees-schedule/employees-schedule.component';
import { ScheduleFormComponent } from './schedule-form/schedule-form.component';
import { TopbarComponent } from '../../shared/topbar/topbar.component';

@Component({
  selector: 'app-register-schedule',
  standalone: true,
  imports: [ EmployeesScheduleComponent,ScheduleFormComponent, TopbarComponent],
  templateUrl: './register-schedule.component.html',
  styleUrl: './register-schedule.component.css'
})


export class RegisterScheduleComponent {

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
