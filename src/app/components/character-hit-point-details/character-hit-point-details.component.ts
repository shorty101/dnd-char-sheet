import { Component, OnInit } from '@angular/core';
import { CharSheetStatsService } from './../../services/char-sheet-stats.service';

@Component({
  selector: 'app-character-hit-point-details',
  templateUrl: './character-hit-point-details.component.html',
  styleUrls: ['./character-hit-point-details.component.css']
})
export class CharacterHitPointDetailsComponent implements OnInit {
  hp: number;
  dd_pool: number;
  stances: any;
  stance_names = [];
  crusader_maneuvers: any;
  crusader_maneuver_names = [];
  swordsage_maneuvers: any;
  swordsage_maneuver_names = [];
  has_delayed_damage_pool = false;

  constructor(public stats: CharSheetStatsService) { }

  ngOnInit() {
    if (Object.keys(this.stats.stancesKnown).length === 0 && this.stats.stancesKnown.constructor === Object) {
      this.stances = null;
    } else {
      this.stances = this.stats.stancesKnown;
      this.stance_names = Object.keys(this.stances);
    }
    if (Object.keys(this.stats.crusaderManeuversKnown).length === 0 && this.stats.crusaderManeuversKnown.constructor === Object) {
      this.crusader_maneuvers = null;
    } else {
      this.crusader_maneuvers = this.stats.crusaderManeuversKnown;
      this.crusader_maneuver_names = Object.keys(this.crusader_maneuvers);
    }
    if (Object.keys(this.stats.swordsageManeuversKnown).length === 0 && this.stats.swordsageManeuversKnown.constructor === Object) {
      this.swordsage_maneuvers = null;
    } else {
      this.swordsage_maneuvers = this.stats.swordsageManeuversKnown;
      this.swordsage_maneuver_names = Object.keys(this.swordsage_maneuvers);
    }
    if (Object.keys(this.stats.classesUsed).includes("Crusader")) {
      this.has_delayed_damage_pool = true;
    }
  }

  calculateHp(logic: String) {
    let maxHp = 0;
    let level = 0;
    if (logic == "HalfPlus1Add5") {
      maxHp = 5;
      for (let classUsed of Object.keys(this.stats.classesUsed)) {
        maxHp = maxHp + this.stats.classesUsed[classUsed].Levels * (Math.floor((this.stats.classesUsed[classUsed].HitDice)/2 + 1) + this.stats.getStatBonus("CON"));
      }
      maxHp = maxHp + this.stats.classesUsed[this.stats.firstLevelledClass].HitDice - Math.floor((this.stats.classesUsed[this.stats.firstLevelledClass].HitDice)/2 + 1);
      return maxHp;
    } else {
      for (let classUsed of Object.keys(this.stats.classesUsed)) {
        maxHp = maxHp + this.stats.classesUsed[classUsed].Levels * (this.stats.classesUsed[classUsed].HitDice/2 + this.stats.getStatBonus("CON"));
        level = level + this.stats.classesUsed[classUsed].Levels;
      }
      maxHp = maxHp + this.stats.classesUsed[this.stats.firstLevelledClass].HitDice - this.stats.classesUsed[this.stats.firstLevelledClass].HitDice/2;
      maxHp = maxHp + level/2
      return Math.floor(maxHp);
    }
  }

}
