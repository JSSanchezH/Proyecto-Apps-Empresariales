import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAbsenceComponent } from './register-absence.component';

describe('RegisterAbsenceComponent', () => {
  let component: RegisterAbsenceComponent;
  let fixture: ComponentFixture<RegisterAbsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterAbsenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterAbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
