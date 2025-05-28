import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from '../../../shared/input-field/input-field.component';

@Component({
  selector: 'app-absence-form',
  standalone: true,
  imports: [CommonModule, InputFieldComponent],
  templateUrl: './absence-form.component.html',
  styleUrl: './absence-form.component.css'
})
export class AbsenceFormComponent {

  @Output() close = new EventEmitter<void>();

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
      placeholder: 'Select Absence Type',
      options: ['Sick Leave', 'Vacation', 'Personal', 'Unpaid Leave']
    },
    { label: 'Start Date', icon: 'bx bx-calendar', type: 'date', placeholder: 'Start Date' },
    { label: 'End Date', icon: 'bx bx-calendar', type: 'date', placeholder: 'End Date' },
    { label: 'Description', icon: 'bx bx-note', type: 'textarea', placeholder: 'Enter a description...' }
  ];

  closeForm() {
    this.close.emit();
  }

  onSubmit() {
    console.log('Absence info registered:', this.form);
  }

}
