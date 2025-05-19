import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-schedule-form',
  standalone: true,
  imports: [],
  templateUrl: './schedule-form.component.html',
  styleUrl: './schedule-form.component.css'
})
export class ScheduleFormComponent {

  @Output() close = new EventEmitter<void>();

  closeForm() {
    this.close.emit();
  }

}
