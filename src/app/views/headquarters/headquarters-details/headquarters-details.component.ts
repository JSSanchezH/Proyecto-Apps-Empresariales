import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../shared/button/button.component';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-headquarters-details',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './headquarters-details.component.html',
  styleUrl: './headquarters-details.component.css',
})
export class HeadquartersDetailsComponent implements OnInit {
  headquarters: any[] = [];
  displayedHeadquarters: any[] = [];

  initialHeadquartersCount = 5;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getHeadquarters().subscribe({
      next: (data) => {
        this.headquarters = data;
        this.displayedHeadquarters = this.headquarters.slice(
          0,
          this.initialHeadquartersCount
        );
      },
      error: (err) => {
        console.error('Error loading headquarters:', err);
      },
    });
  }

  deleteHeadquarter(id: number): void {
    const confirmed = window.confirm(
      '¿Estás seguro de que deseas eliminar este sede?'
    );
    if (!confirmed) return;

    this.employeeService.deleteDepartment(id).subscribe({
      next: () => {
        location.reload();
      },
      error: (err) => {
        location.reload();
      },
    });
  }

  loadMoreHeadquarters() {
    const nextCount = this.displayedHeadquarters.length + 5;
    this.displayedHeadquarters = this.headquarters.slice(0, nextCount);
  }

  loadLessHeadquarters() {
    this.displayedHeadquarters = this.headquarters.slice(
      0,
      this.initialHeadquartersCount
    );
  }
}
