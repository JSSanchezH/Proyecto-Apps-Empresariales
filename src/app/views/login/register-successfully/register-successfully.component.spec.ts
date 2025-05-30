import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSuccessfullyComponent } from './register-successfully.component';

describe('RegisterSuccessfullyComponent', () => {
  let component: RegisterSuccessfullyComponent;
  let fixture: ComponentFixture<RegisterSuccessfullyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterSuccessfullyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterSuccessfullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
