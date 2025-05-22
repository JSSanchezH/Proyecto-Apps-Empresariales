import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDeparmentFormComponent } from './register-deparment-form.component';

describe('RegisterDeparmentFormComponent', () => {
  let component: RegisterDeparmentFormComponent;
  let fixture: ComponentFixture<RegisterDeparmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterDeparmentFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterDeparmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
