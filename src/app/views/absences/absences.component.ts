import { Component } from '@angular/core';
import { TopbarComponent } from '../../shared/topbar/topbar.component';
import { AbsencesDetailsComponent } from './absences-details/absences-details.component';
import { RegisterAbsenceComponent } from './register-absence/register-absence.component';

@Component({
  selector: 'app-absences',
  standalone: true,
  imports: [TopbarComponent, AbsencesDetailsComponent, RegisterAbsenceComponent],
  templateUrl: './absences.component.html',
  styleUrl: './absences.component.css'
})
export class AbsencesComponent {

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
