import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributeStepperComponent } from './contribute-stepper.component';

describe('ContributeStepperComponent', () => {
  let component: ContributeStepperComponent;
  let fixture: ComponentFixture<ContributeStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributeStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributeStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
