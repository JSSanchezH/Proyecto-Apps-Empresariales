import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../shared/button/button.component';
import { Statement } from '@angular/compiler';

@Component({
  selector: 'app-absences-details',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './absences-details.component.html',
  styleUrl: './absences-details.component.css'
})
export class AbsencesDetailsComponent {

  absences =[
    {employee: 'Juan Sanchez', absence_Type: 'Sick Leave', start_Date: '2023-08-01', end_Date: '2023-08-05', description: 'Flue'}
    ,{employee: 'Miguel Patiño', absence_Type: 'Vacation', start_Date: '2023-08-10', end_Date: '2023-08-20', description: 'Family trip'}
    ,{employee: 'Carlos Perez', absence_Type: 'Personal Leave', start_Date: '2023-08-15', end_Date: '2023-08-17', description: 'Urgent matter'}
    ,{employee: 'Ana Garcia', absence_Type: 'Sick Leave', start_Date: '2023-08-18', end_Date: '2023-08-22', description: 'Medical treatment'}
    ,{employee: 'Luis Ramirez', absence_Type: 'Vacation', start_Date: '2023-08-25', end_Date: '2023-09-05', description: 'Beach vacation'}
    ,{employee: 'Leo Fernandez', absence_Type: 'Personal Leave', start_Date: '2023-09-01', end_Date: '2023-09-03', description: 'Family event'}
    ,{employee: 'David Gomez', absence_Type: 'Sick Leave', start_Date: '2023-09-05', end_Date: '2023-09-10', description: 'Medical checkup'}
    ,{employee: 'Sofia Martin', absence_Type: 'Vacation', start_Date: '2023-09-12', end_Date: '2023-09-20', description: 'Travel abroad'}
    ,{employee: 'Jorge Ruiz', absence_Type: 'Personal Leave', start_Date: '2023-09-15', end_Date: '2023-09-17', description: 'Family commitment'}
    ,{employee: 'Laura Torres', absence_Type: 'Sick Leave', start_Date: '2023-09-20', end_Date: '2023-09-25', description: 'Medical appointment'}
    ,{employee: 'Pablo Morales', absence_Type: 'Vacation', start_Date: '2023-09-28', end_Date: '2023-10-05', description: 'Hiking trip'}
    ,{employee: 'Natalia Castro', absence_Type: 'Personal Leave', start_Date: '2023-10-01', end_Date: '2023-10-03', description: 'Family gathering'}
    ,{employee: 'Andres Herrera', absence_Type: 'Sick Leave', start_Date: '2023-10-05', end_Date: '2023-10-10', description: 'Medical follow-up'}
    ,{employee: 'Valentina Ortega', absence_Type: 'Vacation', start_Date: '2023-10-12', end_Date: '2023-10-20', description: 'Cultural trip'}
  ]

  initialAbsencesCount = 5;
  displayedAbsences = this.absences.slice(0, this.initialAbsencesCount);

  loadMoreAbsences() {
    const nextCount = this.displayedAbsences.length + 5;
    this.displayedAbsences = this.absences.slice(0, nextCount);
  }

  loadLessAbsences() {
    this.displayedAbsences = this.absences.slice(
      0, 
      this.initialAbsencesCount);
  }

}
