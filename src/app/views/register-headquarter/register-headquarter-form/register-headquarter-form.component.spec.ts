import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterHeadquarterFormComponent } from './register-headquarter-form.component';

describe('RegisterHeadquarterFormComponent', () => {
  let component: RegisterHeadquarterFormComponent;
  let fixture: ComponentFixture<RegisterHeadquarterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterHeadquarterFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterHeadquarterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
