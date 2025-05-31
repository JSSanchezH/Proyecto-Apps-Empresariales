import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../shared/button/button.component';
import { EmployeeService } from '../../../services/employee.service';
import { Router, RouterLink } from '@angular/router';
import { WorkAbsences} from '../../../model/absences.model';
import { Statement } from '@angular/compiler';


@Component({
  selector: 'app-absences-details',
  standalone: true,
  imports: [CommonModule, ButtonComponent, RouterLink],
  templateUrl: './absences-details.component.html',
  styleUrl: './absences-details.component.css'
})
export class AbsencesDetailsComponent {

  constructor(
    private employeeService: EmployeeService, 
    private router: Router
  ) {}

  absences: WorkAbsences[] = [];
  displayedAbsences: WorkAbsences[] = [];
  initialAbsencesCount = 5;

  ngOnInit() {
    this.employeeService.getAbsences().subscribe((absences) =>{
      this.absences = absences as WorkAbsences[];
      this.displayedAbsences = this.absences.slice(0, this.initialAbsencesCount);
    });
  }
  
  loadMoreAbsences() {
    const nextCount = this.displayedAbsences.length + 5;
    this.displayedAbsences = this.absences.slice(0, nextCount);
  }

  loadLessAbsences() {
    this.displayedAbsences = this.absences.slice(
      0, 
      this.initialAbsencesCount);
  }

}
