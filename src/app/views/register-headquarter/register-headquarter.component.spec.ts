import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterHeadquarterComponent } from './register-headquarter.component';

describe('RegisterHeadquarterComponent', () => {
  let component: RegisterHeadquarterComponent;
  let fixture: ComponentFixture<RegisterHeadquarterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterHeadquarterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterHeadquarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
