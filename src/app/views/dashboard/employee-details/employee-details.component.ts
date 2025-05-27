import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { EmployeeService } from '../../../services/employee.service';
interface Employee {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  hireDate: string;
  role: {
    id: number;
    name: string;
  };
  department: {
    id: number;
    name: string;
    headquarter: {
      id: number;
      name: string;
      address: string;
      phone: number;
      city: {
        id: number;
        name: string;
        state: {
          id: number;
          name: string;
          country: {
            id: number;
            name: string;
            continent: {
              id: number;
              name: string;
            };
          };
        };
      };
      company: {
        id: number;
        name: string;
        nit: number;
        address: string;
        email: string;
        typeIndustry: string;
        urlLogo: string;
      };
    };
  };
  urlFoto: string;
  status: boolean;
}
@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css',
})
export class EmployeeDetailsComponent {
  // employees = [
  //   { name: 'Juan Sanchez', id: '123456', department: 'HR', role: 'Manager' },
  //   {
  //     name: 'Miguel Patiño',
  //     id: '123457',
  //     department: 'IT',
  //     role: 'Developer',
  //   },
  //   {
  //     name: 'Carlos Perez',
  //     id: '123458',
  //     department: 'Finance',
  //     role: 'Analyst',
  //   },
  //   {
  //     name: 'Ana Garcia',
  //     id: '123459',
  //     department: 'Marketing',
  //     role: 'Content Manager',
  //   },
  //   {
  //     name: 'Luis Ramirez',
  //     id: '123460',
  //     department: 'Sales',
  //     role: 'Sales Representative',
  //   },
  //   {
  //     name: 'Leo Fernandez',
  //     id: '123461',
  //     department: 'HR',
  //     role: 'Recruiter',
  //   },
  //   {
  //     name: 'David Gomez',
  //     id: '123462',
  //     department: 'IT',
  //     role: 'Systems Administrator',
  //   },
  //   {
  //     name: 'Sofia Martin',
  //     id: '123463',
  //     department: 'Finance',
  //     role: 'Accountant',
  //   },
  //   {
  //     name: 'Jorge Ruiz',
  //     id: '123464',
  //     department: 'Customer Support',
  //     role: 'Support Specialist',
  //   },
  //   {
  //     name: 'Elena Torres',
  //     id: '123465',
  //     department: 'Operations',
  //     role: 'Operations Manager',
  //   },
  //   {
  //     name: 'Laura Morales',
  //     id: '123466',
  //     department: 'Marketing',
  //     role: 'Marketing Manager',
  //   },
  //   {
  //     name: 'Carlos López',
  //     id: '123467',
  //     department: 'HR',
  //     role: 'HR Specialist',
  //   },
  //   {
  //     name: 'Patricia Rodríguez',
  //     id: '123468',
  //     department: 'IT',
  //     role: 'Front-end Developer',
  //   },
  //   {
  //     name: 'Ricardo Díaz',
  //     id: '123469',
  //     department: 'Finance',
  //     role: 'Financial Analyst',
  //   },
  //   {
  //     name: 'Vanessa García',
  //     id: '123470',
  //     department: 'Sales',
  //     role: 'Sales Manager',
  //   },
  // ];

  constructor(private employeeService: EmployeeService) {}

  employees: Employee[] = [];
  displayedEmployees: Employee[] = [];

  initialEmployeeCount = 5;

  ngOnInit(): void {
    this.employeeService.getCompanyData().subscribe((employees) => {
      this.employees = employees as Employee[];
      this.displayedEmployees = this.employees.slice(
        0,
        this.initialEmployeeCount
      );
      console.log(this.displayedEmployees);
    });
  }

  dismissEmployee(employee: Employee) {
    const updatedEmployee = { ...employee, status: false };

    this.employeeService.dismissEmployee(updatedEmployee).subscribe({
      next: () => {
        employee.status = false; // Actualiza la UI
      },
      error: (error) => {
        console.error('Error dismissing employee:', error);
      },
    });
  }
  loadMore() {
    const nextCount = this.displayedEmployees.length + 5;
    this.displayedEmployees = this.employees.slice(0, nextCount);
  }

  loadLess() {
    this.displayedEmployees = this.employees.slice(
      0,
      this.initialEmployeeCount
    );
  }
}
