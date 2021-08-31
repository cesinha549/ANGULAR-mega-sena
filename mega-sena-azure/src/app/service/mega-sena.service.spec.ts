import { HttpClient } from '@angular/common/http';
import { HttpTestingController,HttpClientTestingModule } from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';

import { MegaSenaService } from './mega-sena.service';

describe('MegaSenaService', () => {
  let service: MegaSenaService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[HttpClient]
    });
    service = TestBed.inject(MegaSenaService);
    httpTestingController = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
