import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPayrollsComponent } from './edit-payrolls.component';

describe('EditPayrollsComponent', () => {
  let component: EditPayrollsComponent;
  let fixture: ComponentFixture<EditPayrollsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditPayrollsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditPayrollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
