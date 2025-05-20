import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsencesDetailsComponent } from './absences-details.component';

describe('AbsencesDetailsComponent', () => {
  let component: AbsencesDetailsComponent;
  let fixture: ComponentFixture<AbsencesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbsencesDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbsencesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
