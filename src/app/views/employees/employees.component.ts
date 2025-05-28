import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from '../../shared/input-field/input-field.component';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../model/employee.model';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Role } from '../../model/role.model';

type FormFieldNames =
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
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, InputFieldComponent, ReactiveFormsModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css',
})
export class EmployeesComponent implements OnInit {
  fields: FormField[] = [];
  roles: string[] = [];
  idRoles: number[] = [];

  headquarters: string[] = [];
  departments: string[] = [];

  updateForm: FormGroup;

  headquartersMap = new Map<string, number>();
  rolesList: Role[] = [];
  departmentsList: Role[] = [];

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.updateForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [
        '',
        [Validators.required, Validators.pattern(/^[0-9\-+() ]+$/)],
      ],
      role: [null, Validators.required], // ID del rol seleccionado
      department: [null, Validators.required], // ID del departamento seleccionado
      urlFoto: ['', Validators.required],
    });
  }

  employeeId!: number;
  employeeData!: Employee;

  form = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: '',
    department: '',
    headquarter: '',
    photoUrl: '',
  };

  setupFields() {
    this.fields = [
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
  ngOnInit(): void {
    this.setupFields();
    this.loadRoles();

    this.loadHeadquarters();

    // Otros
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
          department: employee.department.name,
          headquarter: '',
          photoUrl: '',
        };
      },
      error: (err) => console.error('Error loading employee:', err),
    });

    const toggle = document.querySelector('.toggle');
    const container = document.querySelector('.container');
    const nav = document.querySelector('.nav');

    toggle?.addEventListener('click', () => {
      container?.classList.toggle('active');
      nav?.classList.toggle('active');
    });
  }

  onSubmit() {
    // console.log(this.form);
    const roleName = this.form.role;
    const roleObj = this.rolesList.find((role) => role.name === roleName);

    const departmentName = this.form.department;
    const departmentObj = this.departmentsList.find(
      (d) => d.name === departmentName
    );

    const updatedEmployee: Employee = {
      ...this.employeeData,
      firstname: this.form.firstName,
      lastname: this.form.lastName,
      email: this.form.email,
      phoneNumber: this.form.phone,
      role: roleObj ?? { id: 0, name: '' },
      department: departmentObj ?? { id: 0, name: '' },
      urlFoto: this.form.photoUrl,
    };

    this.employeeService.updateEmployee(updatedEmployee).subscribe({
      next: () => {
        console.log('Employee updated successfully');
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error('Error updating employee:', err);
      },
    });
  }

  loadRoles() {
    this.employeeService.getRoles().subscribe({
      next: (roles) => {
        this.rolesList = roles; // Guardas el arreglo completo con id y name
        this.roles = roles.map((role) => role.name); // Extraes solo los nombres para el selector
        const roleField = this.fields.find((f) => f.name === 'role');
        if (roleField) roleField.options = this.roles;
      },
      error: (err) => console.error('Error loading roles', err),
    });
  }

  loadHeadquarters() {
    this.employeeService.getHeadquarters().subscribe((data) => {
      this.headquarters = data.map((hq: any) => {
        this.headquartersMap.set(hq.name, hq.id);
        return hq.name;
      });
      const hqField = this.fields.find((f) => f.name === 'headquarter');
      if (hqField) hqField.options = this.headquarters;
    });
  }

  loadDepartments(headquarterId: number) {
    this.employeeService.getDepartmentsByHeadquarter(headquarterId).subscribe({
      next: (departments) => {
        this.departmentsList = departments; // objetos completos
        this.departments = departments.map((d) => d.name); // solo nombres para el select
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
}
