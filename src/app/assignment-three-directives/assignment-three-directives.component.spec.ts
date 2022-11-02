import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentThreeDirectivesComponent } from './assignment-three-directives.component';

describe('AssignmentThreeDirectivesComponent', () => {
  let component: AssignmentThreeDirectivesComponent;
  let fixture: ComponentFixture<AssignmentThreeDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentThreeDirectivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignmentThreeDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
