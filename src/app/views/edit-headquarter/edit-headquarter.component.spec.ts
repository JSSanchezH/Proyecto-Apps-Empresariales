import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHeadquarterComponent } from './edit-headquarter.component';

describe('EditHeadquarterComponent', () => {
  let component: EditHeadquarterComponent;
  let fixture: ComponentFixture<EditHeadquarterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditHeadquarterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditHeadquarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
