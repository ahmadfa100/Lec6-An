import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageChild } from './message-child';

describe('MessageChild', () => {
  let component: MessageChild;
  let fixture: ComponentFixture<MessageChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageChild],
    }).compileComponents();

    fixture = TestBed.createComponent(MessageChild);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
