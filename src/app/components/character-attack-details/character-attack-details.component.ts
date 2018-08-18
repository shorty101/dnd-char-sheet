import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CharSheetStatsService } from '../../services/char-sheet-stats.service';
import { CharSheetEquipmentService } from '../../services/char-sheet-equipment.service';
import { ManeuversAndStancesService } from '../../services/maneuvers-and-stances.service';

@Component({
  selector: 'app-character-attack-details',
  templateUrl: './character-attack-details.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./character-attack-details.component.css']
})
export class CharacterAttackDetailsComponent implements OnInit {
  selectedWeapon = "";
  flanking = false;
  powerAttack = 0;
  lastRolls = [];

  constructor(private modalService: NgbModal, public stats: CharSheetStatsService, public equipment: CharSheetEquipmentService, public tob: ManeuversAndStancesService) { }

  ngOnInit() {
  }

  open(content, weaponName) {
    this.selectedWeapon = weaponName;
    this.lastRolls = [];
    this.powerAttack = 0;
    this.flanking = false;
    this.modalService.open(content, {size: 'lg'}).result.then((result) => {
      this.selectedWeapon = weaponName;
      this.lastRolls = [];
      this.powerAttack = 0;
      this.flanking = false;
    }, (reason) => {
      this.selectedWeapon = weaponName;
      this.lastRolls = [];
      this.powerAttack = 0;
      this.flanking = false;
    });
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
        toHit = bab + stat_bonus + bonusToHit - this.powerAttack;
        if (this.flanking) {
          toHit = toHit + 2;
        }
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
        bonus_damage = bonus_damage + Math.ceil(str_bonus * 1.5) + (2 * this.powerAttack);
      } else {
        bonus_damage = bonus_damage + Math.floor(str_bonus * 1.5) + (2 * this.powerAttack);
      }
    } else if (wielded.startsWith("C")) {
      let composite = wielded.substr(1);
      composite = parseInt(composite);
      bonus_damage = bonus_damage + Math.min(composite, str_bonus);
    }
    if (['1H', 'OH'].includes(wielded) || weaponName == "Unarmed Strike") {
      bonus_damage = bonus_damage + this.powerAttack;
    }
    bonus_damage = bonus_damage + weapon["Enhancement"];
    if (bonus_damage < 0) {
      return dice_damage + bonus_damage;
    } else if (bonus_damage == 0) {
      return dice_damage;
    } else {
      return dice_damage + " + " + bonus_damage;
    }
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

  rollAttacks(weaponName) {
    let toHit = this.calculateWeaponToHit(weaponName);
    let hitRolls = [];
    let diceRoll;
    let baseBonuses = toHit.split(" / ");
    let critRangeMult = this.equipment.weapons[weaponName]["Crit Range"];
    let critMult = 2;
    let lowerCritBound = 20;
    critRangeMult = critRangeMult.split("/");
    if (critRangeMult.length == 1) {
      critMult = parseInt(critRangeMult[0].substring(1));
    } else {
      critMult = parseInt(critRangeMult[1].substring(1));
      let critRange = critRangeMult[0].split("-");
      lowerCritBound = parseInt(critRange[0]);
    }
    for (let baseBonus of baseBonuses) {
      diceRoll = Math.floor(Math.random() * (20)) + 1;
      let toHitValue = diceRoll + parseInt(baseBonus);
      let crit = (diceRoll >= lowerCritBound);
      if (crit) {
        let confirmHitValue = Math.floor(Math.random() * (20)) + 1;
        confirmHitValue = confirmHitValue + parseInt(baseBonus);
        toHitValue = toHitValue + " CONFIRM CRIT ON " + confirmHitValue;
      }
      hitRolls.push({
        hitValue: toHitValue,
        damage: this.rollDamage(weaponName, crit, critMult)
      });
    }
    this.lastRolls = hitRolls;
  }

  rollDamage(weaponName, crit, critMult) {
    let weapon = this.equipment.weapons[weaponName];
    let weaponDamage = this.calculateWeaponDamage(weaponName);
    let flatDamageBonus = 0;
    let diceFlatSplit = "1D3";
    if (weaponDamage.includes("-")) {
      diceFlatSplit = weaponDamage.split(" -");
      flatDamageBonus = -1 * parseInt(diceFlatSplit[1]);
    } else {
      diceFlatSplit = weaponDamage.split(" + ");
      if (diceFlatSplit.length == 1) {
        flatDamageBonus = 0;
      } else { 
        flatDamageBonus = parseInt(diceFlatSplit[1]);
      }
    }
    let rolledDamage = 0;
    let diceDamageSplit = diceFlatSplit[0].split("D");
    let numDice = parseInt(diceDamageSplit[0]);
    let diceScore = parseInt(diceDamageSplit[1]);
    for (let i = 0; i < numDice; i++) {
      rolledDamage = rolledDamage + Math.floor(Math.random() * (diceScore)) + 1;
    }
    let critDamage = 0;
    if (crit == true) {
      let nonConfirmedDamage = rolledDamage + flatDamageBonus;
      let critDamage = nonConfirmedDamage;
      flatDamageBonus = flatDamageBonus * (critMult - 1);
      critDamage = critDamage + flatDamageBonus;
      numDice = numDice * (critMult - 1);
      for (let i = 0; i < numDice; i++) {
        critDamage = critDamage + Math.floor(Math.random() * (diceScore)) + 1;
      }
      if (weapon.wielded == '2H') {
        critDamage = critDamage - ((critMult - 1) * this.powerAttack);
      }
      return nonConfirmedDamage + " CONFIRM CRIT DAM " + critDamage;
    } else {
      return rolledDamage + flatDamageBonus;
    }
  }

  powerAttackMinMax() {
    let bab = this.stats.getBAB();
    if (this.powerAttack > bab) {
      this.powerAttack = bab;
    } else if (this.powerAttack < 0) {
      this.powerAttack = 0;
    }
  }
}
