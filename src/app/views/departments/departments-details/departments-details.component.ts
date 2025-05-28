import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../shared/button/button.component';

@Component({
  selector: 'app-departments-details',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './departments-details.component.html',
  styleUrl: './departments-details.component.css'
})
export class DepartmentsDetailsComponent {

  departments = [
    {name: 'Deparment 1', headquarter : 'Headquarter 1'},
    {name: 'Deparment 2', headquarter : 'Headquarter 2'},
    {name: 'Deparment 3', headquarter : 'Headquarter 3'},
    {name: 'Deparment 4', headquarter : 'Headquarter 4'},
    {name: 'Deparment 5', headquarter : 'Headquarter 5'},
    {name: 'Deparment 6', headquarter : 'Headquarter 6'},
    {name: 'Deparment 7', headquarter : 'Headquarter 7'},
    {name: 'Deparment 8', headquarter : 'Headquarter 8'},
    {name: 'Deparment 9', headquarter : 'Headquarter 9'},
    {name: 'Deparment 10', headquarter : 'Headquarter 10'},
    {name: 'Deparment 11', headquarter : 'Headquarter 11'},
    {name: 'Deparment 12', headquarter : 'Headquarter 12'},
  ];
  
  initialDepartmentsCount = 5;
  displayedDepartments = this.departments.slice(0, this.initialDepartmentsCount);

  loadMoreDepartments() {
    const nextCount = this.displayedDepartments.length + 5;
    this.displayedDepartments = this.departments.slice(0, nextCount);
  }

  loadLessDepartments() {
    this.displayedDepartments = this.departments.slice(
      0,
      this.initialDepartmentsCount);
  }
}
