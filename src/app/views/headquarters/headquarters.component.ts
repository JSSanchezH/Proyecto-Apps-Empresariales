import { Component } from '@angular/core';
import { TopbarComponent } from '../../shared/topbar/topbar.component';
import { HeadquartersDetailsComponent } from './headquarters-details/headquarters-details.component';
import { RegisterHeadquartersComponent } from './register-headquarters/register-headquarters.component';

@Component({
  selector: 'app-headquarters',
  standalone: true,
  imports: [TopbarComponent, HeadquartersDetailsComponent, RegisterHeadquartersComponent],
  templateUrl: './headquarters.component.html',
  styleUrl: './headquarters.component.css'
})
export class HeadquartersComponent {

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
