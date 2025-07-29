import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolloutInsights } from './rollout-insights';

describe('RolloutInsights', () => {
  let component: RolloutInsights;
  let fixture: ComponentFixture<RolloutInsights>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RolloutInsights]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolloutInsights);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
