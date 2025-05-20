import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-absence-form',
  standalone: true,
  imports: [],
  templateUrl: './absence-form.component.html',
  styleUrl: './absence-form.component.css'
})
export class AbsenceFormComponent {

  @Output() close = new EventEmitter<void>();

  closeForm() {
    this.close.emit();
  }

}
