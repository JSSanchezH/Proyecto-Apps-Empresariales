import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../shared/button/button.component';
import { EmployeeService } from '../../../services/employee.service';
import { Router, RouterLink } from '@angular/router';
import { Schedule } from '../../../model/schedule.model';

@Component({
  selector: 'app-schedules-details',
  standalone: true,
  imports: [CommonModule, ButtonComponent, RouterLink],
  templateUrl: './schedules-details.component.html',
  styleUrl: './schedules-details.component.css'
})
export class SchedulesDetailsComponent {
  
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  schedules: Schedule[] = [];
  displayedSchedules: Schedule[] = [];

  initialSchedulesCount = 5;

  ngOnInit() {
    this.employeeService.getSchedules().subscribe((schedules) => {
      this.schedules = schedules as Schedule[];
      this.displayedSchedules = this.schedules.slice(0, this.initialSchedulesCount);
  });
  }

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
