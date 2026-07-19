import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageParent } from './message-parent';

describe('MessageParent', () => {
  let component: MessageParent;
  let fixture: ComponentFixture<MessageParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageParent],
    }).compileComponents();

    fixture = TestBed.createComponent(MessageParent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
