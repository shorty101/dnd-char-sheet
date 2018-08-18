import { Component, OnInit } from '@angular/core';
import { CharSheetStatsService } from '../../services/char-sheet-stats.service';
import { ManeuversAndStancesService } from '../../services/maneuvers-and-stances.service';

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

  constructor(public stats: CharSheetStatsService, public tob: ManeuversAndStancesService) { }

  ngOnInit() {
    if (Object.keys(this.tob.stancesKnown).length === 0 && this.tob.stancesKnown.constructor === Object) {
      this.stances = null;
    } else {
      this.stances = this.tob.stancesKnown;
      this.stance_names = Object.keys(this.stances);
    }
    if (Object.keys(this.tob.crusaderManeuversKnown).length === 0 && this.tob.crusaderManeuversKnown.constructor === Object) {
      this.crusader_maneuvers = null;
    } else {
      this.crusader_maneuvers = this.tob.crusaderManeuversKnown;
      this.crusader_maneuver_names = Object.keys(this.crusader_maneuvers);
    }
    if (Object.keys(this.tob.swordsageManeuversKnown).length === 0 && this.tob.swordsageManeuversKnown.constructor === Object) {
      this.swordsage_maneuvers = null;
    } else {
      this.swordsage_maneuvers = this.tob.swordsageManeuversKnown;
      this.swordsage_maneuver_names = Object.keys(this.swordsage_maneuvers);
    }
    if (this.tob.delayedDamagePool > 0) {
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

  incrementTurn() {
    this.tob.incrementTurn();
  }

}
