import { Component, OnInit } from '@angular/core';
import { CharSheetStatsService } from './../../services/char-sheet-stats.service';

@Component({
  selector: 'app-character-feat-details',
  templateUrl: './character-feat-details.component.html',
  styleUrls: ['./character-feat-details.component.css']
})
export class CharacterFeatDetailsComponent implements OnInit {
  featKeys = [];

  constructor(public stats: CharSheetStatsService) { }

  ngOnInit() {
    this.featKeys = Object.keys(this.stats.feats);
  }
}
