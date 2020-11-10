import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentSecondComponent } from './assignment-second.component';

describe('AssignmentSecondComponent', () => {
  let component: AssignmentSecondComponent;
  let fixture: ComponentFixture<AssignmentSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
