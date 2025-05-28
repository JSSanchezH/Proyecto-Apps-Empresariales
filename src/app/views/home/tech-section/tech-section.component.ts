import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechIconComponent } from './tech-icon/tech-icon.component';

@Component({
  selector: 'app-tech-section',
  standalone: true,
  imports: [CommonModule, TechIconComponent],
  templateUrl: './tech-section.component.html',
  styleUrls: ['./tech-section.component.css'],
})
export class TechSectionComponent {
  techList = [
    { icon: 'bx bxl-spring-boot', label: 'Spring Boot' },
    { icon: 'bx bxl-docker', label: 'Docker' },
    { icon: 'bx bxl-postgresql', label: 'PostgreSQL' },
    { icon: 'bx bxl-aws', label: 'AWS' },
    { icon: 'bx bxl-github', label: 'GitHub Actions' },
  ];
}
