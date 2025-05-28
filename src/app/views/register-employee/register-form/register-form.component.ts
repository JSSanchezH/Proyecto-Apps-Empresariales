import { Component, OnInit } from '@angular/core';
import { InputFieldComponent } from '../../../shared/input-field/input-field.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../../services/employee.service';
import { Employee } from '../../../model/employee.model';
import { Role } from '../../../model/role.model';

type FormFieldNames =
  | 'id'
  | 'firstName'
  | 'lastName'
  | 'email'
  | 'phone'
  | 'role'
  | 'department'
  | 'headquarter'
  | 'photoUrl';
interface FormField {
  name: FormFieldNames;
  icon: string;
  type: string;
  placeholder: string;
  options?: string[];
}
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
export class RegisterFormComponent implements OnInit {
  fields: FormField[] = [];

  roles: string[] = [];
  headquarters: string[] = [];
  departments: string[] = [];

  rolesList: Role[] = [];
  departmentsList: any[] = [];

  headquartersMap = new Map<string, number>();

  form = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: '',
    manager: '',
    department: '',
    headquarter: '',
    photoUrl: '',
  };
  registerForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      id: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [
        '',
        [Validators.required, Validators.pattern(/^[0-9\-+() ]+$/)],
      ],
      role: [null, Validators.required],
      department: [null, Validators.required],
      urlFoto: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadRoles();
    this.loadHeadquarters();
    this.setupFields();
  }

  setupFields() {
    this.fields = [
      {
        name: 'id',
        icon: 'bx bxs-id-card',
        type: 'text',
        placeholder: 'id',
      },
      {
        name: 'firstName',
        icon: 'bx bxs-user',
        type: 'text',
        placeholder: 'First Name',
      },
      {
        name: 'lastName',
        icon: 'bx bxs-user',
        type: 'text',
        placeholder: 'Last Name',
      },
      {
        name: 'email',
        icon: 'bx bx-envelope',
        type: 'text',
        placeholder: 'Email',
      },
      {
        name: 'phone',
        icon: 'bx bx-phone',
        type: 'text',
        placeholder: 'Phone number',
      },
      {
        name: 'role',
        icon: 'bx bxs-color',
        type: 'select',
        placeholder: 'Select Role',
        options: this.roles,
      },
      {
        name: 'headquarter',
        icon: 'bx bx-buildings',
        type: 'select',
        placeholder: 'Select Headquarter',
        options: this.headquarters,
      },
      {
        name: 'department',
        icon: 'bx bx-buildings',
        type: 'select',
        placeholder: 'Select Department',
        options: this.departments,
      },
      {
        name: 'photoUrl',
        icon: 'bx bx-aperture',
        type: 'text',
        placeholder: 'url photo',
      },
    ];
  }

  loadRoles() {
    this.employeeService.getRoles().subscribe({
      next: (roles) => {
        this.rolesList = roles;
        this.roles = roles.map((r) => r.name);
        const roleField = this.fields.find((f) => f.name === 'role');
        if (roleField) roleField.options = this.roles;
      },
      error: (err) => console.error('Error loading roles', err),
    });
  }

  loadHeadquarters() {
    this.employeeService.getHeadquarters().subscribe({
      next: (data) => {
        this.headquarters = data.map((hq: any) => {
          this.headquartersMap.set(hq.name, hq.id);
          return hq.name;
        });
        const hqField = this.fields.find((f) => f.name === 'headquarter');
        if (hqField) hqField.options = this.headquarters;
      },
      error: (err) => console.error('Error loading headquarters', err),
    });
  }

  loadDepartments(headquarterId: number) {
    this.employeeService.getDepartmentsByHeadquarter(headquarterId).subscribe({
      next: (departments) => {
        this.departmentsList = departments;
        this.departments = departments.map((d) => d.name);
        const deptField = this.fields.find((f) => f.name === 'department');
        if (deptField) deptField.options = this.departments;
      },
      error: (err) => console.error('Error loading departments', err),
    });
  }

  onFieldChange(fieldName: FormFieldNames, value: string) {
    this.form[fieldName] = value;

    if (fieldName === 'headquarter') {
      const headquarterId = this.headquartersMap.get(value);
      if (headquarterId !== undefined) {
        this.loadDepartments(headquarterId);
      } else {
        this.departments = [];
      }
    }
  }

  onSubmit() {
    // if (this.registerForm.invalid) return;

    const roleObj = this.rolesList.find((r) => r.name === this.form.role);
    const departmentObj = this.departmentsList.find(
      (d) => d.name === this.form.department
    );
    const today = new Date().toISOString().split('T')[0];
    const newEmployee: Employee = {
      id: +this.form.id,
      firstname: this.form.firstName,
      lastname: this.form.lastName,
      email: this.form.email,
      phoneNumber: this.form.phone,
      role: roleObj ?? { id: 0, name: '' },
      department: departmentObj ?? { id: 0, name: '' },
      hireDate: today,
      urlFoto: this.form.photoUrl,
      status: true,
    };

    console.log(newEmployee);

    this.employeeService.createEmployee(newEmployee).subscribe({
      next: (res) => {
        console.log('Empleado creado exitosamente', res);
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error('Error al crear el empleado:', err);
      },
    });
  }
}
