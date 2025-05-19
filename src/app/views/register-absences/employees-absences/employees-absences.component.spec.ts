import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesAbsencesComponent } from './employees-absences.component';

describe('EmployeesAbsencesComponent', () => {
  let component: EmployeesAbsencesComponent;
  let fixture: ComponentFixture<EmployeesAbsencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeesAbsencesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeesAbsencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
