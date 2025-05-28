import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAbsencesComponent } from './edit-absences.component';

describe('EditAbsencesComponent', () => {
  let component: EditAbsencesComponent;
  let fixture: ComponentFixture<EditAbsencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditAbsencesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditAbsencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
