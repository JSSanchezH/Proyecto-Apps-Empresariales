import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from '../../../shared/input-field/input-field.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../../services/employee.service';
import { Department } from '../../../model/department.model';
import { Headquarter } from '../../../model/headquarter.model';
type FormFieldNames = 'name' | 'headquarter';

interface FormField {
  name: FormFieldNames;
  icon: string;
  type: string;
  placeholder: string;
  options?: string[];
}

@Component({
  selector: 'app-edit-deparment-form',
  standalone: true,
  imports: [CommonModule, InputFieldComponent, ReactiveFormsModule],
  templateUrl: './edit-deparment-form.component.html',
  styleUrl: './edit-deparment-form.component.css',
})
export class EditDeparmentFormComponent implements OnInit {
  updateForm: FormGroup;
  departmentId!: number;

  departmentData!: Department;

  headquarters: string[] = [];
  headquartersList: Headquarter[] = [];

  headquartersMap = new Map<string, number>();
  headquartersReverseMap = new Map<number, string>();

  fields: FormField[] = [];
  form = {
    name: '',
    headquarter: '',
  };
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
  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.updateForm = this.fb.group({
      name: ['', Validators.required],
      headquarter: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.setupFields();
    this.loadHeadquarters();

    this.departmentId = Number(this.route.snapshot.paramMap.get('id'));

    this.employeeService.getDepartmentById(this.departmentId).subscribe({
      next: (deparment) => {
        this.departmentData = deparment;
        this.form = {
          name: deparment.name,
          headquarter: deparment.headquarter.name,
        };
      },
      error: (err) => console.error('Error loading employee:', err),
    });
  }

  loadHeadquarters() {
    this.employeeService.getHeadquarters().subscribe({
      next: (headquarters) => {
        this.headquartersList = headquarters; // objetos completos
        this.headquarters = headquarters.map((d) => d.name); // solo nombres para el select
        const hqField = this.fields.find((f) => f.name === 'headquarter');
        if (hqField) hqField.options = this.headquarters;
      },
      error: (err) => console.error('Error loading headquarters', err),
    });

    // this.employeeService.getHeadquarters().subscribe((hqList: any[]) => {
    //   this.headquarters = hqList.map((hq) => {
    //     this.headquartersMap.set(hq.name, hq.id);
    //     this.headquartersReverseMap.set(hq.id, hq.name);
    //     return hq.name;
    //   });

    //   const hqField = this.fields.find((f) => f.name === 'headquarter');
    //   if (hqField) hqField.options = this.headquarters;
    // });
  }

  onSubmit() {
    const headquarterName = this.form.headquarter;
    const headquarterObj = this.headquartersList.find(
      (h) => h.name === headquarterName
    );

    const updatedDepartment = {
      ...this.departmentData,
      name: this.form.name,
      headquarter: headquarterObj ?? { id: 0, name: '' },
    };

    console.log(updatedDepartment);

    console.log(updatedDepartment);
    this.employeeService.updateDepartment(updatedDepartment).subscribe({
      next: () => {
        console.log('Department updated successfully');
        this.router.navigate(['/departments']);
      },
      error: (err) => console.error('Error updating department:', err),
    });
  }

  onFieldChange(fieldName: FormFieldNames, value: string) {
    this.form[fieldName] = value;
  }
}
