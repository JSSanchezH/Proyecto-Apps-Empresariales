import { Component } from '@angular/core';
import { TopbarComponent } from '../../shared/topbar/topbar.component';
import { EditDeparmentFormComponent } from './edit-deparment-form/edit-deparment-form.component';

@Component({
  selector: 'app-edit-deparment',
  standalone: true,
  imports: [TopbarComponent, EditDeparmentFormComponent],
  templateUrl: './edit-deparment.component.html',
  styleUrl: './edit-deparment.component.css'
})
export class EditDeparmentComponent {

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
