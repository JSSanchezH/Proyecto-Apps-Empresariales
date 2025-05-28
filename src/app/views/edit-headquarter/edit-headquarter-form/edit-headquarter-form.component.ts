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
import { Headquarter } from '../../../model/headquarter.model';

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

  headquarterId!: number;
  headquarterData!: Headquarter;

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
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.headquarterId = id;

    this.employeeService.getHeadquarterById(id).subscribe({
      next: (headquarter) => {
        this.headquarterData = headquarter;
        this.form = {
          name: headquarter.name,
          address: headquarter.address,
          phone: headquarter.phone,
          continent: '',
          country: '',
          state: '',
          city: headquarter.city.name,
        };
      },
      error: (err) => console.error('Error loading employee:', err),
    });
  }

  onSubmit() {
    console.log(this.city);

    const cityName = this.city[0];
    const cityObj = this.citiesList.find((c) => c.name === cityName);
    const updatedHeadquarter: Headquarter = {
      ...this.headquarterData,
      name: this.form.name,
      address: this.form.address,
      phone: this.form.phone,
      city: cityObj ?? { id: 0, name: '' },
    };

    this.employeeService.updateHeadquarter(updatedHeadquarter).subscribe({
      next: () => {
        console.log('Headquarter updated successfully');
        this.router.navigate(['/headquarters']);
      },
      error: (err) => {
        console.error('Error updating headquarter:', err);
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
