import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../shared/button/button.component';


@Component({
  selector: 'app-headquarters-details',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './headquarters-details.component.html',
  styleUrl: './headquarters-details.component.css'
})
export class HeadquartersDetailsComponent {

  headquarters = [
    { name: 'Headquarters 1', addres: 'Location 1', phone: '123456789', city: 'medellin', company: 'company 1' },
    { name: 'Headquarters 2', addres: 'Location 2', phone: '987654321', city: 'bogota', company: 'company 2' },
    { name: 'Headquarters 3', addres: 'Location 3', phone: '456789123', city: 'cali', company: 'company 3' },
    { name: 'Headquarters 4', addres: 'Location 4', phone: '321654987', city: 'barranquilla', company: 'company 4' },
    { name: 'Headquarters 5', addres: 'Location 5', phone: '654321789', city: 'cartagena', company: 'company 5' },
    { name: 'Headquarters 6', addres: 'Location 6', phone: '789123456', city: 'medellin', company: 'company 6' },
    { name: 'Headquarters 7', addres: 'Location 7', phone: '159753486', city: 'bogota', company: 'company 7' },
    { name: 'Headquarters 8', addres: 'Location 8', phone: '753159486', city: 'cali', company: 'company 8' },
    { name: 'Headquarters 9', addres: 'Location 9', phone: '951753486', city: 'barranquilla', company: 'company 9' },
    { name: 'Headquarters 10', addres: 'Location 10', phone: '852963741', city: 'cartagena', company: 'company 10' },
    { name: 'Headquarters 11', addres: 'Location 11', phone: '852963741', city: 'medellin', company: 'company 11' },
    { name: 'Headquarters 12', addres: 'Location 12', phone: '852963741', city: 'bogota', company: 'company 12' },
    { name: 'Headquarters 13', addres: 'Location 13', phone: '852963741', city: 'cali', company: 'company 13' },
    { name: 'Headquarters 14', addres: 'Location 14', phone: '852963741', city: 'barranquilla', company: 'company 14' },
    { name: 'Headquarters 15', addres: 'Location 15', phone: '852963741', city: 'cartagena', company: 'company 15' }
  ];

  initialHeadquartersCount = 5;
  displayedHeadquarters = this.headquarters.slice(0, this.initialHeadquartersCount);

  loadMoreHeadquarters() {
    const nextCount = this.displayedHeadquarters.length + 5;
    this.displayedHeadquarters = this.headquarters.slice(0, nextCount);
  }

  loadLessHeadquarters() {
    this.displayedHeadquarters = this.headquarters.slice(
      0,
      this.initialHeadquartersCount);
  }
}
