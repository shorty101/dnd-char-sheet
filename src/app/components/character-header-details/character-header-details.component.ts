import { Component, OnInit } from '@angular/core';
import { CharSheetStatsService } from './../../services/char-sheet-stats.service';

@Component({
  selector: 'app-character-header-details',
  templateUrl: './character-header-details.component.html',
  styleUrls: ['./character-header-details.component.css']
})
export class CharacterHeaderDetailsComponent implements OnInit {

  constructor(public stats: CharSheetStatsService) { }

  ngOnInit() {
  }

}
