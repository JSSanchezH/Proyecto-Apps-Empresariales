import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from '../../../shared/input-field/input-field.component';

@Component({
  selector: 'app-edit-headquarter-form',
  standalone: true,
  imports: [CommonModule, InputFieldComponent],
  templateUrl: './edit-headquarter-form.component.html',
  styleUrl: './edit-headquarter-form.component.css'
})
export class EditHeadquarterFormComponent {

  form = {
    name: '',
    address: '',
    phone: '',
    city: '',
    state: '',
    country: '',
    continent: ''
  };

  fields = [
    { label: 'Name', icon: 'bx bx-user', type: 'text', placeholder: 'Full Name' },
    { label: 'Address', icon: 'bx bx-map', type: 'text', placeholder: 'Address' },
    { label: 'Phone', icon: 'bx bx-phone', type: 'tel', placeholder: 'Phone Number' },
    {
      label: 'City',
      icon: 'bx bx-buildings',
      type: 'select',
      placeholder: 'Select City',
      options: ['New York', 'Los Angeles', 'London']
    },
    {
      label: 'State',
      icon: 'bx bx-map-pin',
      type: 'select',
      placeholder: 'Select State',
      options: ['California', 'Texas', 'Florida']
    },
    {
      label: 'Country',
      icon: 'bx bx-flag',
      type: 'select',
      placeholder: 'Select Country',
      options: ['USA', 'UK', 'Canada']
    },
    {
      label: 'Continent',
      icon: 'bx bx-globe',
      type: 'select',
      placeholder: 'Select Continent',
      options: ['North America', 'Europe', 'Asia']
    }
  ];

  onSubmit() {
    console.log('Headquarter info updated:', this.form);
  }

}
