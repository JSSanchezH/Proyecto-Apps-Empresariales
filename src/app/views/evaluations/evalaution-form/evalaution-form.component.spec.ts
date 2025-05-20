import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvalautionFormComponent } from './evalaution-form.component';

describe('EvalautionFormComponent', () => {
  let component: EvalautionFormComponent;
  let fixture: ComponentFixture<EvalautionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvalautionFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvalautionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
