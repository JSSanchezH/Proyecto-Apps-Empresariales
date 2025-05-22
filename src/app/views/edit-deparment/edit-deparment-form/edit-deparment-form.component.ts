import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from '../../../shared/input-field/input-field.component';

@Component({
  selector: 'app-edit-deparment-form',
  standalone: true,
  imports: [CommonModule, InputFieldComponent],
  templateUrl: './edit-deparment-form.component.html',
  styleUrl: './edit-deparment-form.component.css'
})
export class EditDeparmentFormComponent {

  form = {
    name: '',
    headquarter: ''
  };

  fields = [
    { label: 'Name', icon: 'bx bx-briefcase', type: 'text', placeholder: 'Department Name' },
    {
      label: 'Headquarter',
      icon: 'bx bx-buildings',
      type: 'select',
      placeholder: 'Select Headquarter',
      options: ['New York Office', 'Los Angeles Office', 'London Office', 'Miami Office', 'Chicago Office']
    }
  ];

  onSubmit() {
    console.log('Department info updated:', this.form);
  }

}
