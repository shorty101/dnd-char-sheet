import { TestBed, inject } from '@angular/core/testing';

import { CharSheetEquipmentService } from './char-sheet-equipment.service';

describe('CharSheetEquipmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharSheetEquipmentService]
    });
  });

  it('should be created', inject([CharSheetEquipmentService], (service: CharSheetEquipmentService) => {
    expect(service).toBeTruthy();
  }));
});
