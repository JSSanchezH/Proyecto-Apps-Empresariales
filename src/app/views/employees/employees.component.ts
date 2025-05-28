import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from '../../shared/input-field/input-field.component';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../model/employee.model';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, InputFieldComponent],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css',
})
export class EmployeesComponent implements OnInit {
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
  };

  setupFields() {
    this.fields = [
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

    // Otros
    const toggle = document.querySelector('.toggle');
    const container = document.querySelector('.container');
    const nav = document.querySelector('.nav');

    toggle?.addEventListener('click', () => {
      container?.classList.toggle('active');
      nav?.classList.toggle('active');
    });

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.employeeId = id;

    this.employeeService.getEmployeeById(id).subscribe({
      next: (employee) => {
        this.employeeData = employee;
        this.form = {
          firstName: employee.firstname,
          lastName: employee.lastname,
          email: employee.email,
          phone: employee.phoneNumber,
          role: employee.role.name,
          manager: '',
          department: employee.department.name,
        };
      },
      error: (err) => console.error('Error loading employee:', err),
    });
  }

  onSubmit() {
    const updatedEmployee: Employee = {
      ...this.employeeData,
      firstname: this.form.firstName,
      lastname: this.form.lastName,
      email: this.form.email,
      phoneNumber: this.form.phone,
    };

    this.employeeService.updateEmployee(updatedEmployee).subscribe({
      next: () => {
        console.log('Employee updated successfully');
      },
      error: (err) => {
        console.error('Error updating employee:', err);
      },
    });
  }
}
