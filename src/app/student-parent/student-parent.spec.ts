import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentParent } from './student-parent';

describe('StudentParent', () => {
  let component: StudentParent;
  let fixture: ComponentFixture<StudentParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentParent],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentParent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
