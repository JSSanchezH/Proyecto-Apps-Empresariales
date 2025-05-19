import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAbsencesComponent } from './register-absences.component';

describe('RegisterAbsencesComponent', () => {
  let component: RegisterAbsencesComponent;
  let fixture: ComponentFixture<RegisterAbsencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterAbsencesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterAbsencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
