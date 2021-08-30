import { TestBed } from '@angular/core/testing';

import { MegaSenaService } from './mega-sena.service';

describe('MegaSenaService', () => {
  let service: MegaSenaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MegaSenaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
