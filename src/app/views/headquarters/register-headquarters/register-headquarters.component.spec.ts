import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterHeadquartersComponent } from './register-headquarters.component';

describe('RegisterHeadquartersComponent', () => {
  let component: RegisterHeadquartersComponent;
  let fixture: ComponentFixture<RegisterHeadquartersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterHeadquartersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterHeadquartersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
