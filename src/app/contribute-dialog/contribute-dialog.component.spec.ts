import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributeDialogComponent } from './contribute-dialog.component';

describe('ContributeDialogComponent', () => {
  let component: ContributeDialogComponent;
  let fixture: ComponentFixture<ContributeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
