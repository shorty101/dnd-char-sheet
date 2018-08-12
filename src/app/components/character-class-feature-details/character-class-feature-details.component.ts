import { Component, OnInit } from '@angular/core';
import { CharSheetStatsService } from '../../services/char-sheet-stats.service';

@Component({
  selector: 'app-character-class-feature-details',
  templateUrl: './character-class-feature-details.component.html',
  styleUrls: ['./character-class-feature-details.component.css']
})
export class CharacterClassFeatureDetailsComponent implements OnInit {
  classFeatureKeys = [];

  constructor(public stats: CharSheetStatsService) { }

  ngOnInit() {
    this.classFeatureKeys = Object.keys(this.stats.classFeatures);
  }
}
