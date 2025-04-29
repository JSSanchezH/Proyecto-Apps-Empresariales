import { Component } from '@angular/core';
import { FeatureCardComponent } from './feature-card/feature-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features-section',
  standalone: true,
  imports: [CommonModule, FeatureCardComponent],
  templateUrl: './features-section.component.html',
  styleUrl: './features-section.component.css',
})
export class FeaturesSectionComponent {
  features = [
    {
      icon: 'bx bx-child',
      title: 'Employee Management',
      description:
        'Manage staff profiles, roles, and documentation efficiently',
    },
    {
      icon: 'bx bx-money',
      title: 'Automated Payrolls',
      description:
        'Accurate salary and deduction calculations with intelligent processing',
    },
    {
      icon: 'bx bx-calendar-check',
      title: 'Leaves and Vacations',
      description: 'Simplified system for requesting and approving absences',
    },
    {
      icon: 'bx bx-line-chart',
      title: 'Smart Evaluation',
      description: 'Predictive performance analysis based on historical data',
    },
  ];
}
