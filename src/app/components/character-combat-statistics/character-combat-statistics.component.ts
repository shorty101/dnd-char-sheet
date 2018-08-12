import { Component, OnInit } from '@angular/core';
import { CharSheetStatsService } from '../../services/char-sheet-stats.service';


@Component({
  selector: 'app-character-combat-statistics',
  templateUrl: './character-combat-statistics.component.html',
  styleUrls: ['./character-combat-statistics.component.css']
})
export class CharacterCombatStatisticsComponent implements OnInit {
  public initBonus: number;
  public speed: number;
  public grapple: number;
  public bab: number;
  public sizeBonus: number;

  constructor(public stats: CharSheetStatsService) { }

  ngOnInit() {
    this.initBonus = this.stats.getCappedDexMod();
    if ("Improved Initiative" in this.stats.feats) {
      this.initBonus = this.initBonus + 4;
    }
    this.speed = Math.max(this.stats.characterTraits.Speed, this.stats.armour.MaxSpeed);
    this.sizeBonus = this.stats.sizeTable[this.stats.characterTraits.Size].Grapple;
    this.bab = this.stats.getBAB();
    this.grapple = this.stats.getStatBonus("STR") + this.bab + this.sizeBonus;
  }

  getPrintableBAB() {
    let remainingBab = this.bab;
    let output = "+" + remainingBab;
    while (remainingBab > 5) {
      remainingBab = remainingBab - 5;
      output = output + " / +" + remainingBab;
    }
    return output;
  }

  getPrintableInit() {
    if (this.initBonus >= 0) {
      return "+" + this.initBonus;
    } else {
      return this.initBonus;
    }
  }

}
