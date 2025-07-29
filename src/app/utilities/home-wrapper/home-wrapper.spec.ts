import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWrapper } from './home-wrapper';

describe('HomeWrapper', () => {
  let component: HomeWrapper;
  let fixture: ComponentFixture<HomeWrapper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeWrapper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
