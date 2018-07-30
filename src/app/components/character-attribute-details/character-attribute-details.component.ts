import { Component, OnInit } from '@angular/core';
import { CharSheetStatsService } from './../../services/char-sheet-stats.service';

@Component({
  selector: 'app-character-attribute-details',
  templateUrl: './character-attribute-details.component.html',
  styleUrls: ['./character-attribute-details.component.css']
})
export class CharacterAttributeDetailsComponent implements OnInit {
  public STR: number;
  public DEX: number;
  public CON: number;
  public INT: number;
  public WIS: number;
  public CHA: number;

  constructor(public stats: CharSheetStatsService) { 
    this.STR = this.stats.attributes.STR;
    this.DEX = this.stats.attributes.DEX;
    this.CON = this.stats.attributes.CON;
    this.INT = this.stats.attributes.INT;
    this.WIS = this.stats.attributes.WIS;
    this.CHA = this.stats.attributes.CHA;
  }

  ngOnInit() {
  }

  public printStatBonus(stat) {
    let statBonus = this.stats.getStatBonus(stat);
    if (statBonus >= 0) {
      return this.addPlusBefore(statBonus);
    } else {
      return statBonus;
    }
  }

  public addPlusBefore(text) {
    return "+" + text;
  }
}
