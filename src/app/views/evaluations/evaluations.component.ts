import { Component } from '@angular/core';
import { TopbarComponent } from '../../shared/topbar/topbar.component';
import { EvalautionFormComponent } from './evalaution-form/evalaution-form.component';

@Component({
  selector: 'app-evaluations',
  standalone: true,
  imports: [TopbarComponent, EvalautionFormComponent],
  templateUrl: './evaluations.component.html',
  styleUrl: './evaluations.component.css'
})
export class EvaluationsComponent {

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
