import { Component, OnInit } from '@angular/core';
import { CharSheetStatsService } from '../../services/char-sheet-stats.service';
import { CharSheetEquipmentService } from '../../services/char-sheet-equipment.service';

@Component({
  selector: 'app-character-armour-class',
  templateUrl: './character-armour-class.component.html',
  styleUrls: ['./character-armour-class.component.css']
})
export class CharacterArmourClassComponent implements OnInit {
  public armourClass: number = 0;
  public flatArmour: number = 10;
  public armourBonus: number = 0;
  public shieldBonus: number = 0;
  public sizeBonus: number;
  public naturalArmour: number = 0;
  public deflectionMod: number = 0;
  public miscBonus: number = 0;
  public touchAC: number;
  public flatFootedAC: number;

  constructor(public stats: CharSheetStatsService, public equipment: CharSheetEquipmentService) {
    this.armourBonus = this.equipment.getArmourBonus();
    this.shieldBonus = this.equipment.getShieldBonus();
    this.sizeBonus = this.stats.sizeTable[this.stats.characterTraits.Size].AC;
    this.naturalArmour = this.equipment.getNaturalArmour();
    this.deflectionMod = this.equipment.getDeflectionMod();
    this.armourClass = this.flatArmour + this.armourBonus + this.shieldBonus + this.stats.getCappedDexMod() + this.sizeBonus + this.naturalArmour + this.deflectionMod + this.miscBonus;
    this.touchAC = this.flatArmour + this.stats.getCappedDexMod() + this.deflectionMod + this.miscBonus;
    this.flatFootedAC = this.flatArmour + this.armourBonus + this.shieldBonus + this.naturalArmour + this.deflectionMod + this.miscBonus;
  }

  ngOnInit() { }

}
