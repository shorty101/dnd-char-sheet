import { Component, OnInit } from '@angular/core';
import { CharSheetStatsService } from './../../services/char-sheet-stats.service';

@Component({
  selector: 'app-character-skill-details',
  templateUrl: './character-skill-details.component.html',
  styleUrls: ['./character-skill-details.component.css']
})
export class CharacterSkillDetailsComponent implements OnInit {
  public skills = {};
  public skillsKey = [];

  constructor(public stats: CharSheetStatsService) { }

  ngOnInit() {
    this.setSkills();
  }

  public setSkills() {
    for (let skill in this.stats.skills) {
      if (this.stats.skills[skill].Ranks > 0 || this.stats.skills[skill].UsableUntrained) {
        if (this.stats.skills[skill].Attribute === "DEX") {
          this.skills[skill] = this.stats.getCappedDexMod();
        } else {
          this.skills[skill] = this.stats.getStatBonus(this.stats.skills[skill].Attribute);
        }
        this.skills[skill] = this.skills[skill] + this.stats.skills[skill].Ranks;
        this.skills[skill] = this.skills[skill] + (this.stats.armour.ArmourCheckPenalty * this.stats.skills[skill].ArmourCheckPenalty);
      }
    }
    this.skillsKey = Object.keys(this.skills);
  }

}
