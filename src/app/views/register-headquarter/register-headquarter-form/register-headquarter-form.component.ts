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
import { Headquarter } from '../../../model/headquarter.model';
import { AuthService } from '../../../services/auth.service';

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
  selector: 'app-register-headquarter-form',
  standalone: true,
  imports: [
    CommonModule,
    InputFieldComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './register-headquarter-form.component.html',
  styleUrl: './register-headquarter-form.component.css',
})
export class RegisterHeadquarterFormComponent {
  fields: FormField[] = [];

  continent: string[] = [];
  country: string[] = [];
  state: string[] = [];
  city: string[] = [];

  headquarterId!: number;
  headquarterData!: Headquarter;

  continentsMap = new Map<string, number>();
  countriesMap = new Map<string, number>();
  statesMap = new Map<string, number>();

  citiesList: any[] = [];
  registerForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      headquarter: [null, Validators.required],
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
  }

  onSubmit() {
    // if (this.registerForm.invalid) return;
    const idCompany = this.authService.getCompanyId();
    const cityObj = this.citiesList.find((r) => r.name === this.form.city);

    const newHeadquarter: Headquarter = {
      name: this.form.name,
      address: this.form.address,
      phone: this.form.phone,
      city: cityObj ?? { id: 0, name: '' },
      company: idCompany
        ? { id: idCompany, name: '' }
        : { id: 0, name: '' },
    };
    console.log(newHeadquarter);
    this.employeeService.createHeadquarter(newHeadquarter).subscribe({
      next: (res) => {
        console.log('Sede creado exitosamente', res);
        this.router.navigate(['/headquarters']);
      },
      error: (err) => {
        console.error('Error al crear Sede:', err);
      },
    });
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
    this.form[fieldName] = value;

    if (fieldName === 'continent') {
      const continentId = this.continentsMap.get(value);

      this.country = [];
      this.state = [];
      this.city = [];

      if (continentId !== undefined) {
        this.loadCountries(continentId);
      }
    }
    if (fieldName === 'country') {
      const countryId = this.countriesMap.get(value);

      this.state = [];
      this.city = [];

      if (countryId !== undefined) {
        this.loadStates(countryId);
      }
    }
    if (fieldName === 'state') {
      const stateId = this.statesMap.get(value);

      this.city = [];

      if (stateId !== undefined) {
        this.loadCities(stateId);
      }
    }
  }
}
