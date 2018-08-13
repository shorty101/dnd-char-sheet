import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CharSheetStatsService } from '../../services/char-sheet-stats.service';
import { CharSheetEquipmentService } from '../../services/char-sheet-equipment.service';

@Component({
  selector: 'app-character-attack-details',
  templateUrl: './character-attack-details.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./character-attack-details.component.css']
})
export class CharacterAttackDetailsComponent implements OnInit {
  selectedWeapon = "";

  constructor(private modalService: NgbModal, public stats: CharSheetStatsService, public equipment: CharSheetEquipmentService) { }

  ngOnInit() {
  }

  open(content, weaponName) {
    this.selectedWeapon = weaponName;
    this.modalService.open(content, {size: 'lg'});
  }

  calculateWeaponToHit(weaponName) {
    let weapon = this.equipment.weapons[weaponName];
    let bonusToHit = 0;
    if (weapon["Enhancement"] > 0) {
      bonusToHit = weapon["Enhancement"];
    } else if (weapon["Masterwork"]) {
      bonusToHit = 1;
    }
    let bab = this.stats.getBAB();
    let stat_bonus = 0;
    if (['R', 'T'].includes(weapon["Wielded"])) {
      stat_bonus = this.stats.getCappedDexMod();
    } else if (weapon["Wielded"].startsWith("C")) {
      stat_bonus = this.stats.getCappedDexMod();
    } else if (weapon["Finessable"] && "Weapon Finesse" in this.stats.feats) {
      stat_bonus = this.stats.getCappedDexMod();
    } else {
      stat_bonus = this.stats.getStatBonus("STR");
    }
    let toHit = 0;
    let attackBonusString = "";
    let first = true;
    while (bab >= 0) {
      if (!(bab === 0 && first === false)) {
        toHit = bab + stat_bonus + bonusToHit;
        if (toHit > 0) {
          attackBonusString = attackBonusString + " / +" + toHit.toString();
        } else {
          attackBonusString = attackBonusString + " / -" + toHit.toString();
        }
      }
      first = false;
      bab = bab - 5;
    }
    return attackBonusString.substring(3);
    
  }

  calculateWeaponDamage(weaponName) {
    let weapon = this.equipment.weapons[weaponName];
    let dice_damage = weapon["Damage"];
    let bonus_damage = 0;
    let str_bonus = this.stats.getStatBonus("STR");
    let wielded = weapon["Wielded"];
    if (['1H', 'T', 'L'].includes(wielded)) {
      bonus_damage = bonus_damage + str_bonus;
    } else if (['OHL', 'OH'].includes(wielded)) {
      bonus_damage = bonus_damage + Math.floor(str_bonus/2);
    } else if (['2H'].includes(wielded)) {
      if (str_bonus < 0) {
        bonus_damage = bonus_damage + Math.ceil(str_bonus * 1.5);
      } else {
        bonus_damage = bonus_damage + Math.floor(str_bonus * 1.5);
      }
    } else if (wielded.startsWith("C")) {
      let composite = wielded.substr(1);
      composite = parseInt(composite);
      bonus_damage = bonus_damage + Math.min(composite, str_bonus);
    }
    bonus_damage = bonus_damage + weapon["Enhancement"];
    return dice_damage + " + " + bonus_damage;
  }

  getNotesAndAmmo(weaponName) {
    let weapon = this.equipment.weapons[weaponName];
    let returnString = "";
    if (weapon["Notes"].length > 0) {
      returnString = weapon["Notes"];
    }
    if (weapon["Ammunition"] !== null) {
      returnString = returnString + " Ammo: " + weapon["Ammunition"];
    }
    return returnString;
  }
}
