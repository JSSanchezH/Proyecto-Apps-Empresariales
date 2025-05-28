import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-section',
  standalone: true,
  imports: [],
  templateUrl: './welcome-section.component.html',
  styleUrl: './welcome-section.component.css',
})
export class WelcomeSectionComponent {
  title: string = 'Human Resources Management System with AI';
  subtitle: string =
    'Transforming talent management through artificial intelligence';
}
