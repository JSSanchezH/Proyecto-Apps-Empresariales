import { Component } from '@angular/core';
import { TopbarComponent } from '../../shared/topbar/topbar.component';
import { EditAbsenceFormComponent } from './edit-absence-form/edit-absence-form.component';

@Component({
  selector: 'app-edit-absences',
  standalone: true,
  imports: [TopbarComponent, EditAbsenceFormComponent],
  templateUrl: './edit-absences.component.html',
  styleUrl: './edit-absences.component.css'
})
export class EditAbsencesComponent {

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
