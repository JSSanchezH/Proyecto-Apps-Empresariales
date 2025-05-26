import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeparmentComponent } from './edit-deparment.component';

describe('EditDeparmentComponent', () => {
  let component: EditDeparmentComponent;
  let fixture: ComponentFixture<EditDeparmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDeparmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditDeparmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
