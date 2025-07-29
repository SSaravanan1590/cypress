import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolidatedReport } from './consolidated-report';

describe('ConsolidatedReport', () => {
  let component: ConsolidatedReport;
  let fixture: ComponentFixture<ConsolidatedReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsolidatedReport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsolidatedReport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
