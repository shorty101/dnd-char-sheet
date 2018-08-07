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

  constructor(public stats: CharSheetStatsService) { }

  ngOnInit() {
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
