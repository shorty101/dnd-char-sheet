import { Component, OnInit } from '@angular/core';
import { CharSheetStatsService } from '../../services/char-sheet-stats.service';

@Component({
  selector: 'app-character-language-details',
  templateUrl: './character-language-details.component.html',
  styleUrls: ['./character-language-details.component.css']
})
export class CharacterLanguageDetailsComponent implements OnInit {

  constructor(public stats: CharSheetStatsService) { }

  ngOnInit() {
  }

}
