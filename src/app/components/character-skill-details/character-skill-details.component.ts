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
        this.skills[skill] = {};
        if (this.stats.skills[skill].Attribute === "DEX") {
          this.skills[skill]["AbilityMod"] = this.stats.getCappedDexMod();
        } else {
          this.skills[skill]["AbilityMod"] = this.stats.getStatBonus(this.stats.skills[skill].Attribute);
        }
        this.skills[skill]["Ranks"] = this.stats.skills[skill].Ranks;
        this.skills[skill]["MiscMod"] = (this.stats.armour.ArmourCheckPenalty * this.stats.skills[skill].ArmourCheckPenalty);
        this.skills[skill]["SkillMod"] = this.skills[skill].AbilityMod + this.skills[skill].Ranks + this.skills[skill].MiscMod;
        if (this.skills[skill]["SkillMod"] >= 0) {
          this.skills[skill]["SkillMod"] = "+" + this.skills[skill]["SkillMod"]
        }
        this.skills[skill]["ClassSkill"] = this.stats.skills[skill].ClassSkill;
      }
    }
    this.skillsKey = Object.keys(this.skills);
  }

}
