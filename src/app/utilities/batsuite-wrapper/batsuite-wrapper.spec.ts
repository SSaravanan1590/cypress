import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatsuiteWrapper } from './batsuite-wrapper';

describe('BatsuiteWrapper', () => {
  let component: BatsuiteWrapper;
  let fixture: ComponentFixture<BatsuiteWrapper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BatsuiteWrapper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatsuiteWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
