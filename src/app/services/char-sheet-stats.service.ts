import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharSheetStatsService {
  public attributes = {
    "STR": 8,
    "DEX": 8,
    "CON": 8,
    "INT": 8,
    "WIS": 8,
    "CHA": 8,
  }

  public skills = {
    "Appraise": {
      "Attribute":"INT",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": true,
      "ArmourCheckPenalty": 0
    },
    "Autohypnosis": {
      "Attribute":"WIS",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": false,
      "ArmourCheckPenalty": 0
    },
    "Balance": {
      "Attribute":"DEX",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": true,
      "ArmourCheckPenalty": 1
    },
    "Bluff": {
      "Attribute":"CHA",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": true,
      "ArmourCheckPenalty": 0
    },
    "Climb": {
      "Attribute":"STR",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": true,
      "ArmourCheckPenalty": 1
    },
    "Concentration": {
      "Attribute":"CON",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": true,
      "ArmourCheckPenalty": 0
    },
    "Craft": {
      "Attribute":"INT",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": true,
      "ArmourCheckPenalty": 0
    },
    "Decipher Script": {
      "Attribute":"INT",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": false,
      "ArmourCheckPenalty": 0
    },
    "Diplomacy": {
      "Attribute":"CHA",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": true,
      "ArmourCheckPenalty": 0
    },
    "Disable Device": {
      "Attribute":"INT",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": false,
      "ArmourCheckPenalty": 0
    },
    "Disguise": {
      "Attribute":"CHA",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": true,
      "ArmourCheckPenalty": 0
    },
    "Escape Artist": {
      "Attribute":"DEX",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": true,
      "ArmourCheckPenalty": 1
    },
    "Forgery": {
      "Attribute":"INT",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": true,
      "ArmourCheckPenalty": 0
    },
    "Gather Information": {
      "Attribute":"CHA",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": true,
      "ArmourCheckPenalty": 0
    },
    "Handle Animal": {
      "Attribute":"CHA",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": false,
      "ArmourCheckPenalty": 0
    },
    "Heal": {
      "Attribute":"WIS",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": true,
      "ArmourCheckPenalty": 0
    },
    "Hide": {
      "Attribute":"DEX",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": true,
      "ArmourCheckPenalty": 1
    },
    "Intimidate": {
      "Attribute":"CHA",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": true,
      "ArmourCheckPenalty": 0
    },
    "Jump": {
      "Attribute":"STR",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": true,
      "ArmourCheckPenalty": 1
    },
    "Knowledge (history)": {
      "Attribute":"INT",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": false,
      "ArmourCheckPenalty": 0
    },
    "Knowledge (religion)": {
      "Attribute":"INT",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": false,
      "ArmourCheckPenalty": 0
    },
    "Listen": {
      "Attribute":"WIS",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": true,
      "ArmourCheckPenalty": 0
    },
    "Martial Lore": {
      "Attribute":"INT",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": false,
      "ArmourCheckPenalty": 0
    },
    "Move Silently": {
      "Attribute":"DEX",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": true,
      "ArmourCheckPenalty": 1
    },
    "Open Lock": {
      "Attribute":"DEX",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": false,
      "ArmourCheckPenalty": 0
    },
    "Perform": {
      "Attribute":"CHA",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": true,
      "ArmourCheckPenalty": 0
    },
    "Profession": {
      "Attribute":"WIS",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": true,
      "ArmourCheckPenalty": 0
    },
    "Psicraft": {
      "Attribute":"INT",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": false,
      "ArmourCheckPenalty": 0
    },
    "Ride": {
      "Attribute":"DEX",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": true,
      "ArmourCheckPenalty": 0
    },
    "Search": {
      "Attribute":"INT",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": true,
      "ArmourCheckPenalty": 0
    },
    "Sense Motive": {
      "Attribute":"WIS",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": true,
      "ArmourCheckPenalty": 0
    },
    "Sleight of Hand": {
      "Attribute":"DEX",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": false,
      "ArmourCheckPenalty": 1
    },
    "Spellcraft": {
      "Attribute":"INT",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": false,
      "ArmourCheckPenalty": 0
    },
    "Spot": {
      "Attribute":"WIS",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": true,
      "ArmourCheckPenalty": 0
    },
    "Survival": {
      "Attribute":"WIS",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": true,
      "ArmourCheckPenalty": 0
    },
    "Swim": {
      "Attribute":"STR",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": true,
      "ArmourCheckPenalty": 2
    },
    "Tumble": {
      "Attribute":"DEX",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": false,
      "ArmourCheckPenalty": 1
    },
    "Use Magic Device": {
      "Attribute":"CHA",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": false,
      "ArmourCheckPenalty": 0
    },
    "Use Psionic Device": {
      "Attribute":"CHA",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": false,
      "ArmourCheckPenalty": 0
    },
    "Use Rope": {
      "Attribute":"DEX",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": true,
      "ArmourCheckPenalty": 0
    },
  }

  public classesUsed = {}
  public racialTraits = {}
  public classFeatures = {}
  public languages = []
  public feats = {}
  public characterTraits = {
    Name: "",
    Player: "",
    ECL: "",
    Race: "",
    Size: "M",
    Gender: "",
    Alignment: "N",
    Religion: "",
    Height: "",
    Weight: "",
    Looks: "",
    Speed: 30
  }

  public armour = {
    "Base": 10,
    "Armour Bonus": 0,
    "Shield Bonus": 0,
    "MaxDex": 0,
    "ArmourCheckPenalty": 0,
    "MaxSpeed": 30,
    "SlowRun": false,
    "ArcaneSpellFailure": 0,
    "Natural Armour": 0,
    "Deflection": 0,
    "Misc. Mods": 0
  }

  public sizeTable = {
    "S": {
      "ToHit": 1,
      "AC": 1,
      "Grapple": -4,
      "Hide": 4,
      "Reach": 5
    },
    "M": {
      "ToHit": 0,
      "AC": 0,
      "Grapple": 0,
      "Hide": 0,
      "Reach": 5
    },
    "L": {
      "ToHit": -1,
      "AC": -1,
      "Grapple": 4,
      "Hide": -4,
      "Reach": 10
    }
  }

  constructor() {
    this.attributes.STR = 17;
    this.attributes.DEX = 13;
    this.attributes.CON = 14;
    this.attributes.INT = 12;
    this.attributes.WIS = 10;
    this.attributes.CHA = 14;

    this.skills.Balance.ClassSkill = true;
    this.skills.Craft.ClassSkill = true;
    this.skills.Concentration.ClassSkill = true;
    this.skills.Diplomacy.ClassSkill = true;
    this.skills.Intimidate.ClassSkill = true;
    this.skills.Jump.ClassSkill = true;
    this.skills["Knowledge (history)"].ClassSkill = true;
    this.skills["Knowledge (religion)"].ClassSkill = true;
    this.skills["Martial Lore"].ClassSkill = true;
    this.skills.Ride.ClassSkill = true;

    this.skills.Balance.Ranks = 4;
    this.skills.Concentration.Ranks = 4;
    this.skills.Diplomacy.Ranks = 4;
    this.skills.Jump.Ranks = 4;
    this.skills.Intimidate.Ranks = 4;
    this.skills["Knowledge (religion)"].Ranks = 4

    this.classesUsed = {
      "Crusader": {
        "Levels": 1,
        "BAB": "Full",
        "Fort": "Strong",
        "Ref": "Weak",
        "Will": "Weak"
      }
    }

    this.racialTraits = {
      "Extra Feat": "Gain 1 extra feat at 1st level.",
      "Extra Skills": "Gain 4 extra skill points at 1st level and 1 extra skill point at each additional level."
    }

    this.classFeatures = {
      "Steely resolve 5": "Delayed Damage Pool of 5",
      "Furious counterstrike": "Bonus to hit and damage equal to (Delayed damage pool)/5 (min 1)"
    }

    this.languages = ["Common", "Draconic"]

    this.feats = {
      "Improved Initiative": "+4 to Initiative Rolls",
      "Power Attack": "Trade accuracy for damage, -1 to hit for +1/+2 damage"
    }

    this.armour["Armour Bonus"] = 5;
    this.armour["Shield Bonus"] = 0;
    this.armour.MaxDex = 2;
    this.armour.MaxSpeed = 20;
    this.armour.ArcaneSpellFailure = 0.3;
    this.armour.ArmourCheckPenalty = -5;
  }

  public getStatBonus(stat) {
    return Math.floor((this.attributes[stat] - 10)/2);
  }

  public getCappedDexMod() {
    let dex = this.getStatBonus("DEX");
    if (dex > this.armour.MaxDex) {
      return this.armour.MaxDex;
    } else {
      return dex;
    }
  }

  public calculateSaveBonus(save) {
    let weakCount = 0;
    let strongCount = 0;
    let hasStrong = false;
    for(let classUsed in this.classesUsed) {
      if (this.classesUsed[classUsed][save] == "Strong") {
        hasStrong = true;
        strongCount = strongCount + this.classesUsed[classUsed].Levels;
      } else {
        weakCount = weakCount + this.classesUsed[classUsed].Levels;
      }
    }
    let finalSaveValue = Math.floor(weakCount/3) + Math.floor(strongCount/2);
    if (hasStrong) {
      return finalSaveValue + 2;
    } else {
      return finalSaveValue;
    }
  }

  public getBAB() {
    let BAB = 0;
    for(let classUsed in this.classesUsed) {
      if (this.classesUsed[classUsed].BAB == "Full") {
        BAB = BAB + this.classesUsed[classUsed].Levels;
      } else if (this.classesUsed[classUsed].BAB == "Half") {
        BAB = BAB + Math.floor(this.classesUsed[classUsed].Levels/2);
      } else {
        BAB = BAB + Math.floor(this.classesUsed[classUsed].Levels * 3/4);
      }
    }
    return BAB;
  }
}
