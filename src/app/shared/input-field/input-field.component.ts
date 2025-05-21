import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css',
})
export class InputFieldComponent {
  @Input() iconClass: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() options: string[] = []; // para el select, las opciones como array de strings
}
