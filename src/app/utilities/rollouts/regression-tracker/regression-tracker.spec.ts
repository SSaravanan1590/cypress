import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegressionTracker } from './regression-tracker';

describe('RegressionTracker', () => {
  let component: RegressionTracker;
  let fixture: ComponentFixture<RegressionTracker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegressionTracker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegressionTracker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
