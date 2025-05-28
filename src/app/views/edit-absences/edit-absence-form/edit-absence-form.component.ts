import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from '../../../shared/input-field/input-field.component';

@Component({
  selector: 'app-edit-absence-form',
  standalone: true,
  imports: [CommonModule, InputFieldComponent],
  templateUrl: './edit-absence-form.component.html',
  styleUrl: './edit-absence-form.component.css'
})
export class EditAbsenceFormComponent {

  form = {
    absenceType: '',
    startDate: '',
    endDate: '',
    description: ''
  };

  fields = [
    {
      label: 'Absence Type',
      icon: 'bx bx-credit-card',
      type: 'select',
      placeholder: 'Select Type',
      options: ['Sick Leave', 'Vacation', 'Personal']
    },
    { label: 'Start Date', icon: 'bx bx-calendar', type: 'date', placeholder: 'Start Date' },
    { label: 'End Date', icon: 'bx bx-calendar', type: 'date', placeholder: 'End Date' },
    { label: 'Description', icon: 'bx bx-note', type: 'textarea', placeholder: 'Enter a description...' }
  ];

  onSubmit() {
    console.log('Absence info updated:', this.form);
  }

}
