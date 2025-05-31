import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputFieldComponent } from '../../../shared/input-field/input-field.component';
import { EmployeeService } from '../../../services/employee.service';
import { Schedule } from '../../../model/schedule.model';

type FormFieldNames = 'startTime' | 'endTime' | 'breakStart' | 'breakEnd';

interface FormField {
  name: FormFieldNames;
  icon: string;
  type: string;
  placeholder: string;
  label: string;
}

@Component({
  selector: 'app-schedule-form',
  standalone: true,
  imports: [CommonModule, InputFieldComponent, ReactiveFormsModule],
  templateUrl: './schedule-form.component.html',
  styleUrl: './schedule-form.component.css'
})
export class ScheduleFormComponent {
  @Input() employeeId!: number;
  @Output() close = new EventEmitter<void>();
  @Output() scheduleCreated = new EventEmitter<Schedule>();

  form = {
    startTime: '',
    endTime: '',
    breakStart: '',
    breakEnd: ''
  };

  scheduleForm: FormGroup;

  fields: FormField[] = [
    { 
      name: 'startTime',
      label: 'Start Time', 
      icon: 'bx bx-time', 
      type: 'time', 
      placeholder: 'Start Time' 
    },
    { 
      name: 'endTime',
      label: 'End Time', 
      icon: 'bx bx-time', 
      type: 'time', 
      placeholder: 'End Time' 
    },
    { 
      name: 'breakStart',
      label: 'Break Start', 
      icon: 'bx bx-coffee', 
      type: 'time', 
      placeholder: 'Break Start' 
    },
    { 
      name: 'breakEnd',
      label: 'Break End', 
      icon: 'bx bx-coffee', 
      type: 'time', 
      placeholder: 'Break End' 
    }
  ];

  constructor(
    private employeeService: EmployeeService,
    private fb: FormBuilder
  ) {
    this.scheduleForm = this.fb.group({
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      breakStart: ['', Validators.required],
      breakEnd: ['', Validators.required]
    });

    // Debug: Escuchar cambios en el formulario
    this.scheduleForm.valueChanges.subscribe(values => {
      console.log('Form values changed:', values);
    });
  }

  ngOnInit() {
    console.log('ScheduleFormComponent initialized');
    console.log('Employee ID:', this.employeeId);
  }

  onFieldChange(fieldName: FormFieldNames, value: string) {
    console.log(`Field ${fieldName} changed to: ${value}`); // Debug
    this.form[fieldName] = value;
    
    // Actualizar el FormControl correspondiente
    const control = this.scheduleForm.get(fieldName);
    if (control && control.value !== value) {
      control.setValue(value);
      control.markAsTouched();
    }
  }

  closeForm() {
    this.close.emit();
  }

  onSubmit() {
    console.log('onSubmit called'); // Debug
    console.log('Form values:', this.form); // Debug
    console.log('Form valid:', this.scheduleForm.valid); // Debug
    console.log('Form errors:', this.scheduleForm.errors); // Debug

    // Marcar todos los campos como touched para mostrar errores
    this.scheduleForm.markAllAsTouched();

    if (this.scheduleForm.invalid) {
      console.error('Form is invalid');
      console.log('Individual field errors:');
      Object.keys(this.scheduleForm.controls).forEach(key => {
        const control = this.scheduleForm.get(key);
        if (control && control.errors) {
          console.log(`${key}:`, control.errors);
        }
      });
      return;
    }

    // Convertir las horas a formato ISO 8601 (HH:mm:ss)
    const formatTimeToISO = (time: string): string => {
      return time.includes(':') ? time + ':00' : time;
    };

    const newSchedule = {
      startTime: formatTimeToISO(this.form.startTime),
      endTime: formatTimeToISO(this.form.endTime),
      breakStart: formatTimeToISO(this.form.breakStart),
      breakEnd: formatTimeToISO(this.form.breakEnd),
      employee: {
        id: this.employeeId
      }
    };

    console.log('Schedule to be created:', newSchedule);

    this.employeeService.createSchedule(newSchedule).subscribe({
      next: (res) => {
        console.log('Schedule created successfully', res);
        this.scheduleCreated.emit(newSchedule as Schedule);
        this.closeForm();
      },
      error: (err) => {
        console.error('Error creating schedule:', err);
      }
    });
  }

  // Método para validar que los horarios sean lógicos
  private validateScheduleTimes(): boolean {
    const { startTime, endTime, breakStart, breakEnd } = this.form;
    
    if (!startTime || !endTime || !breakStart || !breakEnd) {
      return false;
    }

    // Convertir a objetos Date para comparar
    const start = new Date(`2000-01-01T${startTime}`);
    const end = new Date(`2000-01-01T${endTime}`);
    const breakS = new Date(`2000-01-01T${breakStart}`);
    const breakE = new Date(`2000-01-01T${breakEnd}`);

    // Validaciones lógicas
    if (start >= end) {
      console.error('End time must be after start time');
      return false;
    }

    if (breakS >= breakE) {
      console.error('Break end time must be after break start time');
      return false;
    }

    if (breakS <= start || breakE >= end) {
      console.error('Break times must be within work hours');
      return false;
    }

    return true;
  }
}