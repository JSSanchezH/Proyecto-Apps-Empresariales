import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-icon.component.html',
  styleUrls: ['./tech-icon.component.css'],
})
export class TechIconComponent {
  @Input() icon = '';
  @Input() label = '';
}
