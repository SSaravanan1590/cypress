import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolloutsWrapper } from './rollouts-wrapper';

describe('RolloutsWrapper', () => {
  let component: RolloutsWrapper;
  let fixture: ComponentFixture<RolloutsWrapper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RolloutsWrapper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolloutsWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
