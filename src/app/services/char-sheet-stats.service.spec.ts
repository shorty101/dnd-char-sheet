import { TestBed, inject } from '@angular/core/testing';

import { CharSheetStatsService } from './char-sheet-stats.service';

describe('CharSheetStatsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharSheetStatsService]
    });
  });

  it('should be created', inject([CharSheetStatsService], (service: CharSheetStatsService) => {
    expect(service).toBeTruthy();
  }));
});
