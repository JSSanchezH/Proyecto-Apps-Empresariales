import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDeparmentComponent } from './register-deparment.component';

describe('RegisterDeparmentComponent', () => {
  let component: RegisterDeparmentComponent;
  let fixture: ComponentFixture<RegisterDeparmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterDeparmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterDeparmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
