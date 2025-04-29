import { Component, OnInit } from '@angular/core';
import { WelcomeSectionComponent } from './welcome-section/welcome-section.component';
import { FeaturesSectionComponent } from './features-section/features-section.component';
import { DashboardPreviewComponent } from './dashboard-preview/dashboard-preview.component';
import { TechSectionComponent } from './tech-section/tech-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    WelcomeSectionComponent,
    FeaturesSectionComponent,
    DashboardPreviewComponent,
    TechSectionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // Toggle menu functionality
    const toggle = document.querySelector('.toggle');
    const container = document.querySelector('.container');
    const nav = document.querySelector('.nav');

    toggle?.addEventListener('click', () => {
      container?.classList.toggle('active');
      nav?.classList.toggle('active');
    });
  }
}
