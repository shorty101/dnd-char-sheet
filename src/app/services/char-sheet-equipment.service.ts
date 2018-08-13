import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharSheetEquipmentService {
  public weapons = {
    /*"Weapon": {
      "Damage": "Dice as string e.g. 1D6",
      "Wielded": "L (Light), 1H (One Handed), 2H (Two Handed), OH (Off Hand), OHL (Off Hand Light), R (Ranged), T (Thrown), C* (Composite where * is a number e.g. C3)",
      "Crit Range": "The weapons crit range e.g. 19-20/x2",
      "Type": "Any string that denotes the type, e.g. S, S or P, P and B",
      "Masterwork": true, // Whether or not the weapon is masterwork
      "Enhancement": 1, // Numbered enhancement bonus of weapon 
      "Range Increment": "A string defining how large your range increment is, e.g. 100ft",
      "Ammunition": 30, //null or numbered amount of ammo for the weapon
      "Notes": "Any string that you want to use to remind you of anything about the weapon"
    }*/
  };

  public weaponKeys = [];

  public armour = {
    "Name": "Unarmoured",
    "Armour Bonus": 0,
    "Max Dex": null,
    "Base Armour Check Penalty": 0,
    "Arcane Spell Failure": 0,
    "Speed Reduction 30": 30,
    "Speed Reduction 20": 20,
    "Weight": 0,
    "Masterwork": false,
    "Enhancement": 0,
    "Notes": ""
  }

  public shield = {
    "Name": "Unshielded",
    "Shield Bonus": 0,
    "Max Dex": null,
    "Base Armour Check Penalty": 0,
    "Arcane Spell Failure": 0,
    "Weight": 0,
    "Masterwork": false,
    "Enhancement": 0,
    "Notes": ""
  }

  public naturalArmour = {
    "Base": 0,
    "Enhancement": 0
  }

  public deflectionModifier = {
    "Base": 0,
    "Enhancement": 0
  }

  constructor() {
    this.weapons = {
      "Greatsword": {
        "Damage": "2D6",
        "Wielded": "2H",
        "Crit Range": "19-20/x2",
        "Type": "S",
        "Masterwork": false,
        "Enhancement": 0,
        "Range Increment": "-",
        "Ammunition": null,
        "Finessable": false,
        "Notes": ""
      },
      "Longbow": {
        "Damage": "1D8",
        "Wielded": "R",
        "Crit Range": "x3",
        "Type": "P",
        "Masterwork": false,
        "Enhancement": 0,
        "Range Increment": "100ft",
        "Ammunition": 30,
        "Finessable": false,
        "Notes": ""
      },
      "Unarmed Strike": {
        "Damage": "1D4",
        "Wielded": "1H",
        "Crit Range": "x2",
        "Type": "B",
        "Masterwork": false,
        "Enhancement": 0,
        "Range Increment": "-",
        "Ammunition": null,
        "Finessable": true,
        "Notes": "Non-lethal, Provokes AoO"
      }
    };

    this.weaponKeys = Object.keys(this.weapons);

    this.armour = {
      "Name": "Chain Shirt",
      "Armour Bonus": 4,
      "Max Dex": 4,
      "Base Armour Check Penalty": -2,
      "Arcane Spell Failure": 0.2,
      "Speed Reduction 30": 30,
      "Speed Reduction 20": 20,
      "Weight": 25,
      "Masterwork": false,
      "Enhancement": 0,
      "Notes": ""
    }
  }

  getDexCap() {
    let dexCap = null;
    if (this.armour["Max Dex"] && this.shield["Max Dex"]) {
      dexCap = Math.min(this.armour["Max Dex"], this.shield["Max Dex"]);
    } else if (this.armour["Max Dex"] !== null) {
      dexCap = this.armour["Max Dex"];
    } else {
      dexCap = this.shield["Max Dex"];
    }
    return dexCap;
  }

  getArmourBonus() {
    return this.armour["Armour Bonus"] + this.armour["Enhancement"];
  }

  getShieldBonus() {
    return this.shield["Shield Bonus"] + this.shield["Enhancement"];
  }

  getArcaneSpellFailure() {
    let asf =  (this.armour["Arcane Spell Failure"] + this.shield["Arcane Spell Failure"]) * 100;
    return asf.toString() + "%";
  }

  getArmourCheckPenalty() {
    let armACP = this.armour["Base Armour Check Penalty"];
    if (armACP < 0 && this.armour["Masterwork"]) {
      armACP = armACP + 1;
    }
    let shieldACP = this.shield["Base Armour Check Penalty"];
    if (shieldACP < 0 && this.shield["Masterwork"]) {
      shieldACP = shieldACP + 1;
    }
    return armACP + shieldACP;
  }

  getSpeedReduction(speed) {
    let keyString = "Speed Reduction " + speed;
    return this.armour[keyString];
  }

  getNaturalArmour() {
    return this.naturalArmour["Base"] + this.naturalArmour["Enhancement"];
  }

  getDeflectionMod() {
    return this.deflectionModifier["Base"] + this.deflectionModifier["Enhancement"];
  }

  getWeaponDamage(weapon) {

  }
}
