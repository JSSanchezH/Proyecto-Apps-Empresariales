import { Component } from '@angular/core';
import { TopbarComponent } from '../../shared/topbar/topbar.component';
import { EditHeadquarterFormComponent } from './edit-headquarter-form/edit-headquarter-form.component';


@Component({
  selector: 'app-edit-headquarter',
  standalone: true,
  imports: [TopbarComponent, EditHeadquarterFormComponent],
  templateUrl: './edit-headquarter.component.html',
  styleUrl: './edit-headquarter.component.css'
})
export class EditHeadquarterComponent {

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
