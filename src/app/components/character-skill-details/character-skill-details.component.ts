import { Component, OnInit } from '@angular/core';
import { CharSheetStatsService } from '../../services/char-sheet-stats.service';
import { CharSheetEquipmentService } from '../../services/char-sheet-equipment.service';

@Component({
  selector: 'app-character-skill-details',
  templateUrl: './character-skill-details.component.html',
  styleUrls: ['./character-skill-details.component.css']
})
export class CharacterSkillDetailsComponent implements OnInit {
  public skills = {};
  public skillsKey = [];
  public filteredSkills = {};
  public filteredSkillsKey = [];

  constructor(public stats: CharSheetStatsService, public equipment: CharSheetEquipmentService) { }

  ngOnInit() {
    this.setSkills();
    this.filteredSkills = this.skills;
    this.filteredSkillsKey = this.skillsKey;
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
        this.skills[skill]["MiscMod"] = (this.equipment.getArmourCheckPenalty() * this.stats.skills[skill].ArmourCheckPenalty);
        this.skills[skill]["SkillMod"] = this.skills[skill].AbilityMod + this.skills[skill].Ranks + this.skills[skill].MiscMod;
        if (this.skills[skill]["SkillMod"] >= 0) {
          this.skills[skill]["SkillMod"] = "+" + this.skills[skill]["SkillMod"]
        }
        this.skills[skill]["ClassSkill"] = this.stats.skills[skill].ClassSkill;
      }
    }
    this.skillsKey = Object.keys(this.skills);
  }

  public filterSkills(text) {
    text = text.value.toLowerCase();
    let filteredSkills = {};
    let filteredSkillsKey = [];
    let skills = this.skills;
    let lowercaseSkillName = "";
    this.skillsKey.forEach(function(skill) {
      lowercaseSkillName = skill.toLowerCase();
      if (lowercaseSkillName.includes(text)) {
        filteredSkillsKey.push(skill);
        filteredSkills[skill] = skills[skill];
      }
    });
    this.filteredSkills = filteredSkills;
    this.filteredSkillsKey = filteredSkillsKey;
  }
}
