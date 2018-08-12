import { Component, OnInit } from '@angular/core';
import { CharSheetStatsService } from '../../services/char-sheet-stats.service';

@Component({
  selector: 'app-character-racial-trait-details',
  templateUrl: './character-racial-trait-details.component.html',
  styleUrls: ['./character-racial-trait-details.component.css']
})
export class CharacterRacialTraitDetailsComponent implements OnInit {
  public racialTraitKeys = [];

  constructor(public stats: CharSheetStatsService) { }

  ngOnInit() {
    this.racialTraitKeys = Object.keys(this.stats.racialTraits);
  }

}
