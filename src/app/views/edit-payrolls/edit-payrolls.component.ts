import { Component } from '@angular/core';
import { TopbarComponent } from '../../shared/topbar/topbar.component';
import { EditFormComponent } from './edit-form/edit-form.component';

@Component({
  selector: 'app-edit-payrolls',
  standalone: true,
  imports: [TopbarComponent, EditFormComponent],
  templateUrl: './edit-payrolls.component.html',
  styleUrl: './edit-payrolls.component.css'
})
export class EditPayrollsComponent {

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
