import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPayrollComponent } from './register-payroll.component';

describe('RegisterPayrollComponent', () => {
  let component: RegisterPayrollComponent;
  let fixture: ComponentFixture<RegisterPayrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterPayrollComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterPayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
