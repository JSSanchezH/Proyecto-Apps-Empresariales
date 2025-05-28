import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../shared/button/button.component';
import { EmployeeService } from '../../../services/employee.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-departments-details',
  standalone: true,
  imports: [CommonModule, ButtonComponent, RouterLink],
  templateUrl: './departments-details.component.html',
  styleUrl: './departments-details.component.css',
})
export class DepartmentsDetailsComponent implements OnInit {
  departments: any[] = []; // Si tienes modelo, cambia a Department[]
  displayedDepartments: any[] = [];

  initialDepartmentsCount = 5;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getDepartments().subscribe({
      next: (data) => {
        this.departments = data;
        this.displayedDepartments = this.departments.slice(
          0,
          this.initialDepartmentsCount
        );
      },
      error: (err) => {
        console.error('Error loading departments:', err);
      },
    });
  }

  deleteDepartment(id: number): void {
    const confirmed = window.confirm(
      '¿Estás seguro de que deseas eliminar este departamento?'
    );
    if (!confirmed) return;

    this.employeeService.deleteDepartment(id).subscribe({
      next: () => {
        // alert('Departamento eliminado exitosamente.');
        location.reload();
      },
      error: (err) => {
        location.reload();
      },
    });
  }

  loadMoreDepartments() {
    const nextCount = this.displayedDepartments.length + 5;
    this.displayedDepartments = this.departments.slice(0, nextCount);
  }

  loadLessDepartments() {
    this.displayedDepartments = this.departments.slice(
      0,
      this.initialDepartmentsCount
    );
  }
}
