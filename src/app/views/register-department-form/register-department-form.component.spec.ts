import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDepartmentFormComponent } from './register-department-form.component';

describe('RegisterDepartmentFormComponent', () => {
  let component: RegisterDepartmentFormComponent;
  let fixture: ComponentFixture<RegisterDepartmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterDepartmentFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterDepartmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
