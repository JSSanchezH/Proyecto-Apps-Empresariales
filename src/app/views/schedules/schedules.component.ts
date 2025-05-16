import { Component } from '@angular/core';
import { TopbarComponent } from '../../shared/topbar/topbar.component';
import { CardsComponent } from './cards/cards.component';
import { SchedulesDetailsComponent } from './schedules-details/schedules-details.component';
import { RegisterScheduleComponent } from './register-schedule/register-schedule.component';


@Component({
  selector: 'app-schedules',
  standalone: true,
  imports: [
    TopbarComponent,
    CardsComponent,
    SchedulesDetailsComponent,
    RegisterScheduleComponent,
  ],
  templateUrl: './schedules.component.html',
  styleUrl: './schedules.component.css'
})
export class SchedulesComponent {

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
