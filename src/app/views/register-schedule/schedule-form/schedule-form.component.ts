import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from '../../../shared/input-field/input-field.component';

type FormFieldNames = 'startTime' | 'endTime' | 'breakStart' | 'breakEnd';

interface FormField {
  name: FormFieldNames;
  icon: string;
  type: string;
  placeholder: string;
}

@Component({
  selector: 'app-schedule-form',
  standalone: true,
  imports: [CommonModule, InputFieldComponent],
  templateUrl: './schedule-form.component.html',
  styleUrl: './schedule-form.component.css'
})
export class ScheduleFormComponent {
@Input() employeeId!: number;
@Output() close = new EventEmitter<void>();

  form = {
    startTime: '',
    endTime: '',
    breakStart: '',
    breakEnd: ''
  };

  fields = [
    { label: 'Start Time', icon: 'bx bx-time', type: 'time', placeholder: 'Start Time' },
    { label: 'End Time', icon: 'bx bx-time', type: 'time', placeholder: 'End Time' },
    { label: 'Break Start', icon: 'bx bx-coffee', type: 'time', placeholder: 'Break Start' },
    { label: 'Break End', icon: 'bx bx-coffee', type: 'time', placeholder: 'Break End' }
  ];

  closeForm() {
    this.close.emit();
  }

  onSubmit() {
    console.log('Schedule submitted:', {
      ...this.form,
      employeeId: this.employeeId
    });
  }

}
