import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriggerJobs } from './trigger-jobs';

describe('TriggerJobs', () => {
  let component: TriggerJobs;
  let fixture: ComponentFixture<TriggerJobs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TriggerJobs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TriggerJobs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
