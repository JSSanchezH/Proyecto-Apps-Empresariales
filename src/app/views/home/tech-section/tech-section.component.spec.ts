import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechSectionComponent } from './tech-section.component';

describe('TechSectionComponent', () => {
  let component: TechSectionComponent;
  let fixture: ComponentFixture<TechSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
