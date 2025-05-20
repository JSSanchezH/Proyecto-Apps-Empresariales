import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHeadquarterFormComponent } from './edit-headquarter-form.component';

describe('EditHeadquarterFormComponent', () => {
  let component: EditHeadquarterFormComponent;
  let fixture: ComponentFixture<EditHeadquarterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditHeadquarterFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditHeadquarterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
