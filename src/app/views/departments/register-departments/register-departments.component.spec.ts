import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDepartmentsComponent } from './register-departments.component';

describe('RegisterDepartmentsComponent', () => {
  let component: RegisterDepartmentsComponent;
  let fixture: ComponentFixture<RegisterDepartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterDepartmentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
