import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationCheck } from './navigation-check';

describe('NavigationCheck', () => {
  let component: NavigationCheck;
  let fixture: ComponentFixture<NavigationCheck>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationCheck]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationCheck);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
