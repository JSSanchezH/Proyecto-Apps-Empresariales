import { Component } from '@angular/core';
import { InputFieldComponent } from '../../../shared/input-field/input-field.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../../services/employee.service';
import { Employee } from '../../../model/employee.model';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [
    InputFieldComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css',
})
export class RegisterFormComponent {
  fields: any[] = [];
  roles: string[] = [];
  headquarters: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}

  employeeId!: number;
  employeeData!: Employee;

  form = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: '',
    manager: '',
    department: '',
    urlFoto: '',
  };

  setupFields() {
    this.fields = [
      { icon: 'bx bxs-id-card', type: 'text', placeholder: 'ID' },

      { icon: 'bx bxs-user', type: 'text', placeholder: 'First Name' },
      { icon: 'bx bxs-user', type: 'text', placeholder: 'Last Name' },
      { icon: 'bx bx-envelope', type: 'text', placeholder: 'Email' },
      { icon: 'bx bx-phone', type: 'text', placeholder: 'Phone number' },
      {
        icon: 'bx bxs-color',
        type: 'select',
        placeholder: 'Select Role',
        options: this.roles,
      },
      {
        icon: 'bx bx-buildings',
        type: 'select',
        placeholder: 'Select Headquarter',
        options: this.headquarters,
      },
      {
        icon: 'bx bx-buildings',
        type: 'select',
        placeholder: 'Select Department',
        options: ['Placeholder HQ 1', '2', '3'],
      },
      { icon: 'bx bx-aperture', type: 'text', placeholder: 'url photo' },
    ];
  }

  ngOnInit(): void {
    // Roles
    this.employeeService.getRoles().subscribe({
      next: (roles) => {
        this.roles = roles;
        this.setupFields();
      },
      error: (err) => console.error('Error loading roles', err),
    });

    // Deparments
    this.employeeService.getHeadquarters().subscribe({
      next: (headquarters) => {
        this.headquarters = headquarters;
        this.setupFields();
      },
      error: (err) => console.error('Error loading deparments', err),
    });
  }
  onSubmit() {
    console.log('Form submitted:', this.form);
  }
}
