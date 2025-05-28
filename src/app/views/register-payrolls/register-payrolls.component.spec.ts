import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPayrollsComponent } from './register-payrolls.component';

describe('RegisterPayrollsComponent', () => {
  let component: RegisterPayrollsComponent;
  let fixture: ComponentFixture<RegisterPayrollsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterPayrollsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterPayrollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
