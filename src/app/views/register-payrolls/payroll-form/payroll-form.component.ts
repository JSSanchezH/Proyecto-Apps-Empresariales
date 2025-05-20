import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-payroll-form',
  standalone: true,
  imports: [],
  templateUrl: './payroll-form.component.html',
  styleUrl: './payroll-form.component.css'
})
export class PayrollFormComponent {

  @Output() close = new EventEmitter<void>();

  closeForm() {
    this.close.emit();
  }
  
}
