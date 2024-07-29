import { TestBed } from '@angular/core/testing';

import { TvShowDetailsService } from './tv-show-details.service';

describe('TvShowDetailsService', () => {
  let service: TvShowDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvShowDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
