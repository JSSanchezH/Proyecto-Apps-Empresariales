import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from '../../../shared/input-field/input-field.component';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../../services/employee.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

type FormFieldNames =
  | 'fullName'
  | 'address'
  | 'phone'
  | 'continent'
  | 'country'
  | 'state'
  | 'city';

interface FormField {
  name: FormFieldNames;
  icon: string;
  type: string;
  placeholder: string;
  options?: string[];
}
@Component({
  selector: 'app-edit-headquarter-form',
  standalone: true,
  imports: [CommonModule, InputFieldComponent, ReactiveFormsModule],
  templateUrl: './edit-headquarter-form.component.html',
  styleUrl: './edit-headquarter-form.component.css',
})
export class EditHeadquarterFormComponent {
  fields: FormField[] = [];

  continent: string[] = [];
  country: string[] = [];
  state: string[] = [];
  city: string[] = [];

  updateForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.updateForm = this.fb.group({
      fullName: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9\-+() ]+$/)]],
      continent: [null, Validators.required],
      country: [null, Validators.required],
      state: [null, Validators.required],
      city: [null, Validators.required],
    });
  }

  form = {
    name: '',
    address: '',
    phone: '',
    continent: '',
    country: '',
    state: '',
    city: '',
  };

  setupFields() {
    this.fields = [
      {
        name: 'fullName',
        icon: 'bx bx-user',
        type: 'text',
        placeholder: 'Full Name',
      },
      {
        name: 'address',
        icon: 'bx bx-map',
        type: 'text',
        placeholder: 'Address',
      },
      {
        name: 'phone',
        icon: 'bx bx-phone',
        type: 'tel',
        placeholder: 'Phone Number',
      },
      {
        name: 'continent',
        icon: 'bx bx-globe',
        type: 'select',
        placeholder: 'Select Continent',
        options: ['North America', 'Europe', 'Asia'],
      },
      {
        name: 'country',
        icon: 'bx bx-flag',
        type: 'select',
        placeholder: 'Select Country',
        options: ['USA', 'UK', 'Canada'],
      },
      {
        name: 'state',
        icon: 'bx bx-map-pin',
        type: 'select',
        placeholder: 'Select State',
        options: ['California', 'Texas', 'Florida'],
      },
      {
        name: 'city',
        icon: 'bx bx-buildings',
        type: 'select',
        placeholder: 'Select City',
        options: ['New York', 'Los Angeles', 'London'],
      },
    ];
  }
  ngOnInit(): void {
    this.setupFields();
    // this.loadRoles();

    // this.loadHeadquarters();

    // // Otros
    // const id = Number(this.route.snapshot.paramMap.get('id'));
    // this.employeeId = id;

    // this.employeeService.getEmployeeById(id).subscribe({
    //   next: (employee) => {
    //     this.employeeData = employee;
    //     this.form = {
    //       firstName: employee.firstname,
    //       lastName: employee.lastname,
    //       email: employee.email,
    //       phone: employee.phoneNumber,
    //       role: employee.role.name,
    //       department: employee.department.name,
    //       headquarter: '',
    //       photoUrl: '',
    //     };
    //   },
    //   error: (err) => console.error('Error loading employee:', err),
    // });
  }

  //   loadContinents() {
  //   this.employeeService.getContinents().subscribe((data) => {
  //     this.headquarters = data.map((hq: any) => {
  //       this.headquartersMap.set(hq.name, hq.id);
  //       return hq.name;
  //     });
  //     const hqField = this.fields.find((f) => f.name === 'headquarter');
  //     if (hqField) hqField.options = this.headquarters;
  //   });
  // }
  onSubmit() {
    console.log('Headquarter info updated:', this.form);
  }
}
