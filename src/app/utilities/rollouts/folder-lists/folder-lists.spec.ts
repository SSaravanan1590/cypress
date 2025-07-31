import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderLists } from './folder-lists';

describe('FolderLists', () => {
  let component: FolderLists;
  let fixture: ComponentFixture<FolderLists>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FolderLists]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FolderLists);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
