import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsComponent {
  cards = [
    { number: '120', name: 'Employees', icon: 'bx bx-user-plus' },
    { number: '12', name: 'Headquarters', icon: 'bx bxs-buildings' },
    { number: '30', name: 'Departments', icon: 'bx bxs-map-pin' },
    { number: '30', name: 'Absences', icon: 'bx bxs-door-open' },
  ];
}
