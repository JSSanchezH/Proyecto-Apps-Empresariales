import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAbsenceFormComponent } from './edit-absence-form.component';

describe('EditAbsenceFormComponent', () => {
  let component: EditAbsenceFormComponent;
  let fixture: ComponentFixture<EditAbsenceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditAbsenceFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditAbsenceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
