import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesPayrollComponent } from './employees-payroll.component';

describe('EmployeesPayrollComponent', () => {
  let component: EmployeesPayrollComponent;
  let fixture: ComponentFixture<EmployeesPayrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeesPayrollComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeesPayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
