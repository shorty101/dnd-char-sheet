import { TestBed, inject } from '@angular/core/testing';

import { ManeuversAndStancesService } from './maneuvers-and-stances.service';

describe('ManeuversAndStancesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManeuversAndStancesService]
    });
  });

  it('should be created', inject([ManeuversAndStancesService], (service: ManeuversAndStancesService) => {
    expect(service).toBeTruthy();
  }));
});
