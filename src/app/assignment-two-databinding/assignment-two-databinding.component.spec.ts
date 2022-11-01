import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentTwoDatabindingComponent } from './assignment-two-databinding.component';

describe('AssignmentTwoDatabindingComponent', () => {
  let component: AssignmentTwoDatabindingComponent;
  let fixture: ComponentFixture<AssignmentTwoDatabindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentTwoDatabindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignmentTwoDatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
