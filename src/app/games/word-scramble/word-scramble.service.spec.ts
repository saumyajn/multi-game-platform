import { TestBed } from '@angular/core/testing';

import { WordScrambleService } from './word-scramble.service';

describe('WordScrambleService', () => {
  let service: WordScrambleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordScrambleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
