import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from '../../shared/topbar/topbar.component';
import { EmployeesAbsencesComponent } from './employees-absences/employees-absences.component';
import { AbsenceFormComponent } from './absence-form/absence-form.component';

@Component({
  selector: 'app-register-absences',
  standalone: true,
  imports: [CommonModule, TopbarComponent, EmployeesAbsencesComponent, AbsenceFormComponent],
  templateUrl: './register-absences.component.html',
  styleUrl: './register-absences.component.css'
})
export class RegisterAbsencesComponent {

  isFormVisible = false;
  
  showForm() {
    this.isFormVisible = true;
  }

  hideForm() {
    this.isFormVisible = false;
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
