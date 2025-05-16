import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../shared/button/button.component';

@Component({
  selector: 'app-schedules-details',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './schedules-details.component.html',
  styleUrl: './schedules-details.component.css'
})
export class SchedulesDetailsComponent {
  schedules = [
    {employee: 'Juan Sanchez', startTime: '08:00', endTime: '17:00', breakStart: '12:00', breakEnd: '13:00', },
    {employee: 'Miguel Patiño', startTime: '09:00', endTime: '18:00', breakStart: '13:00', breakEnd: '14:00', },
    {employee: 'Carlos Perez', startTime: '08:30', endTime: '17:30', breakStart: '12:30', breakEnd: '13:30', },
    {employee: 'Ana Garcia', startTime: '08:00', endTime: '17:00', breakStart: '12:00', breakEnd: '13:00', },
    {employee: 'Luis Ramirez', startTime: '09:00', endTime: '18:00', breakStart: '13:00', breakEnd: '14:00', },
    {employee: 'Leo Fernandez', startTime: '08:30', endTime: '17:30', breakStart: '12:30', breakEnd: '13:30', },
    {employee: 'David Gomez', startTime: '08:00', endTime: '17:00', breakStart: '12:00', breakEnd: '13:00', },
    {employee: 'Sofia Martin', startTime: '09:00', endTime: '18:00', breakStart: '13:00', breakEnd: '14:00', },
    {employee: 'Jorge Ruiz', startTime: '08:30', endTime: '17:30', breakStart: '12:30', breakEnd: '13:30', },
    {employee: 'Laura Torres', startTime: '08:00', endTime: '17:00', breakStart: '12:00', breakEnd: '13:00', },
    {employee: 'Pablo Morales', startTime: '09:00', endTime: '18:00', breakStart: '13:00', breakEnd: '14:00', },
    {employee: 'Natalia Castro', startTime: '08:30', endTime: '17:30', breakStart: '12:30', breakEnd: '13:30', },
    {employee: 'Andres Herrera', startTime: '08:00', endTime: '17:00', breakStart: '12:00', breakEnd: '13:00', },
    {employee: 'Valentina Ortega', startTime: '09:00', endTime: '18:00', breakStart: '13:00', breakEnd: '14:00', },
  ];

  initialSchedulesCount = 5;
  displayedSchedules = this.schedules.slice(0, this.initialSchedulesCount);

  loadMoreSchedules() {
    const nextCount = this.displayedSchedules.length + 5;
    this.displayedSchedules = this.schedules.slice(0, nextCount);
  }

  loadLessSchedules() {
    this.displayedSchedules = this.schedules.slice(
      0, 
      this.initialSchedulesCount);
  }
}
