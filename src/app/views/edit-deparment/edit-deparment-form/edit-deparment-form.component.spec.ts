import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeparmentFormComponent } from './edit-deparment-form.component';

describe('EditDeparmentFormComponent', () => {
  let component: EditDeparmentFormComponent;
  let fixture: ComponentFixture<EditDeparmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDeparmentFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditDeparmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
