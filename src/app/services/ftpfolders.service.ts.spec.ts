import { TestBed } from '@angular/core/testing';

import { FtpfoldersServiceTs } from './ftpfolders.service.ts';

describe('FtpfoldersServiceTs', () => {
  let service: FtpfoldersServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FtpfoldersServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
