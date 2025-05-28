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
  | 'name'
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

  continentsMap = new Map<string, number>();
  countriesMap = new Map<string, number>();
  statesMap = new Map<string, number>();

  citiesList: any[] = [];

  updateForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.updateForm = this.fb.group({
      name: ['', Validators.required],
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
        name: 'name',
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
        options: this.continent,
      },
      {
        name: 'country',
        icon: 'bx bx-flag',
        type: 'select',
        placeholder: 'Select Country',
        options: this.country,
      },
      {
        name: 'state',
        icon: 'bx bx-map-pin',
        type: 'select',
        placeholder: 'Select State',
        options: this.state,
      },
      {
        name: 'city',
        icon: 'bx bx-buildings',
        type: 'select',
        placeholder: 'Select City',
        options: this.city,
      },
    ];
  }
  ngOnInit(): void {
    this.setupFields();
    this.loadContinents();
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

  loadContinents() {
    this.employeeService.getContinents().subscribe((data) => {
      this.continent = data.map((c: any) => {
        this.continentsMap.set(c.name, c.id);
        return c.name;
      });
      const conField = this.fields.find((f) => f.name === 'continent');
      if (conField) conField.options = this.continent;
    });
  }
  onSubmit() {
    console.log('Continent info updated:', this.form);
  }

  loadCountries(continentId: number) {
    this.employeeService
      .getCountriesByContinent(continentId)
      .subscribe((data) => {
        this.country = data.map((c: any) => {
          this.countriesMap.set(c.name, c.id);
          return c.name;
        });
        const counField = this.fields.find((f) => f.name === 'country');
        if (counField) counField.options = this.country;
      });
  }

  loadStates(countryId: number) {
    this.employeeService.getStatesByCountry(countryId).subscribe((data) => {
      this.state = data.map((s: any) => {
        this.statesMap.set(s.name, s.id);
        return s.name;
      });
      const sField = this.fields.find((f) => f.name === 'state');
      if (sField) sField.options = this.state;
    });
  }

  loadCities(countryId: number) {
    this.employeeService.getCitiesByState(countryId).subscribe({
      next: (cities) => {
        this.citiesList = cities; // objetos completos
        this.city = cities.map((d) => d.name); // solo nombres para el select
        const cityField = this.fields.find((f) => f.name === 'city');
        if (cityField) cityField.options = this.city;
      },
      error: (err) => console.error('Error loading cities', err),
    });
  }
  onFieldChange(fieldName: FormFieldNames, value: string) {
    this.updateForm.get(fieldName)?.setValue(value);
    this.form[fieldName] = value;

    if (fieldName === 'continent') {
      const continentId = this.continentsMap.get(value);

      // Limpiar select dependientes
      this.country = [];
      this.state = [];
      this.city = [];

      this.updateForm.patchValue({
        country: null,
        state: null,
        city: null,
      });

      if (continentId !== undefined) {
        this.loadCountries(continentId);
      }
    } else if (fieldName === 'country') {
      const countryId = this.countriesMap.get(value);

      this.state = [];
      this.city = [];

      this.updateForm.patchValue({
        state: null,
        city: null,
      });

      if (countryId !== undefined) {
        this.loadStates(countryId);
      }
    } else if (fieldName === 'state') {
      const stateId = this.statesMap.get(value);

      this.city = [];

      this.updateForm.patchValue({
        city: null,
      });

      if (stateId !== undefined) {
        this.loadCities(stateId);
      }
    }
  }
}
