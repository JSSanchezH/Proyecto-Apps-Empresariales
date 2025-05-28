import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from '../../../shared/input-field/input-field.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../../services/employee.service';
import { Department } from '../../../model/department.model';

type FormFieldNames = 'name' | 'headquarter';
interface FormField {
  name: FormFieldNames;
  icon: string;
  type: string;
  placeholder: string;
  options?: string[];
}

@Component({
  selector: 'app-register-deparment-form',
  standalone: true,
  imports: [
    CommonModule,
    InputFieldComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './register-deparment-form.component.html',
  styleUrl: './register-deparment-form.component.css',
})
export class RegisterDeparmentFormComponent {
  fields: FormField[] = [];

  headquarters: string[] = [];

  headquartersList: any[] = [];

  headquartersMap = new Map<string, number>();

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      headquarter: [null, Validators.required],
    });
  }

  form = {
    id: '',
    name: '',
    headquarter: '',
  };

  registerForm: FormGroup;

  ngOnInit(): void {
    this.loadHeadquarters();
    this.setupFields();
  }
  setupFields() {
    this.fields = [
      {
        name: 'name',
        icon: 'bx bx-briefcase',
        type: 'text',
        placeholder: 'Department Name',
      },
      {
        name: 'headquarter',
        icon: 'bx bx-buildings',
        type: 'select',
        placeholder: 'Select Headquarter',
        options: this.headquarters,
      },
    ];
  }
  loadHeadquarters() {
    this.employeeService.getHeadquarters().subscribe({
      next: (data) => {
        this.headquartersList = data;

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

  onFieldChange(fieldName: FormFieldNames, value: string) {
    this.form[fieldName] = value;
  }

  onSubmit() {
    // if (this.registerForm.invalid) return;

    const headquarterObj = this.headquartersList.find(
      (r) => r.name === this.form.headquarter
    );

    const newDepartment: Department = {
      name: this.form.name,
      headquarter: headquarterObj ?? { id: 0, name: '' },
    };

    this.employeeService.createDepartment(newDepartment).subscribe({
      next: (res) => {
        console.log('Empleado creado exitosamente', res);
        this.router.navigate(['/departments']);
      },
      error: (err) => {
        console.error('Error al crear el empleado:', err);
      },
    });
  }
}
