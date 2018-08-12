import { Injectable } from '@angular/core';
import { CharSheetEquipmentService } from './char-sheet-equipment.service';

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

  public base_attributes = {
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
    "Knowledge (arcana)": {
      "Attribute":"INT",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": false,
      "ArmourCheckPenalty": 0
    },
    "Knowledge (arch/eng)": {
      "Attribute":"INT",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": false,
      "ArmourCheckPenalty": 0
    },
    "Knowledge (dungeoneering)": {
      "Attribute":"INT",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": false,
      "ArmourCheckPenalty": 0
    },
    "Knowledge (geography)": {
      "Attribute":"INT",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": false,
      "ArmourCheckPenalty": 0
    },
    "Knowledge (history)": {
      "Attribute":"INT",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": false,
      "ArmourCheckPenalty": 0
    },
    "Knowledge (local)": {
      "Attribute":"INT",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": false,
      "ArmourCheckPenalty": 0
    },
    "Knowledge (nature)": {
      "Attribute":"INT",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": false,
      "ArmourCheckPenalty": 0
    },
    "Knowledge (nobility/royalty)": {
      "Attribute":"INT",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": false,
      "ArmourCheckPenalty": 0
    },
    "Knowledge (the planes)": {
      "Attribute":"INT",
      "Ranks": 0,
      "MiscBonus": 0,
      "ClassSkill": false,
      "UsableUntrained": false,
      "ArmourCheckPenalty": 0
    },
    "Knowledge (psionics)": {
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
  public firstLevelledClass = "";
  public lastLevelledClass = "";
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

  stancesKnown = {};
  crusaderManeuversKnown = {};
  swordsageManeuversKnown = {};

  constructor(public equipment: CharSheetEquipmentService) {
    this.characterTraits.Name = "Ben Swolo";
    this.characterTraits.Player = "Ben Mackay";
    this.characterTraits.ECL = "1";
    this.characterTraits.Race = "Human";
    this.characterTraits.Size = "M";
    this.characterTraits.Gender = "M";
    this.characterTraits.Alignment = "LG";
    this.characterTraits.Religion = "Silver Flame";
    this.characterTraits.Height = "5'11\"";
    this.characterTraits.Weight = "180lbs";
    this.characterTraits.Looks = "Paladin-y";


    this.base_attributes.STR = 17;
    this.base_attributes.DEX = 13;
    this.base_attributes.CON = 14;
    this.base_attributes.INT = 12;
    this.base_attributes.WIS = 10;
    this.base_attributes.CHA = 14;

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
        "HitDice": 10,
        "BAB": "Full",
        "Fort": "Strong",
        "Ref": "Weak",
        "Will": "Weak",
        "SkillsPerLevel": 4,
        "ClassSkills": [
          "Balance",
          "Craft",
          "Concentration",
          "Diplmoacy",
          "Intimidate",
          "Knowledge (history)",
          "Knowledge (religion)",
          "Martial Lore",
          "Ride"
        ]
      }
    }
    
    this.firstLevelledClass = "Crusader";
    this.lastLevelledClass = "Crusader";

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
      "Power Attack": "Trade accuracy for damage, -1 to hit for +1/+2 damage",
      //Unlocked Level 3 "Blind-Fight": "",
      //Unlocked Level 5 "Improved Unarmed Strike": "",
      //Unlocked Level 6 "Adaptive Style (Swordsage)": "",
      //Unlocked Level 9 "Dodge": "",
    }

    this.armour["Armour Bonus"] = 5;
    this.armour["Shield Bonus"] = 0;
    this.armour.MaxDex = 2;
    this.armour.MaxSpeed = 20;
    this.armour.ArcaneSpellFailure = 0.3;
    this.armour.ArmourCheckPenalty = -5;

    this.crusaderManeuversKnown = {
      "Crusader's Strike": {
        "Level": "Crusader 1",
        "Initiation Action": "1 Standard Action",
        "Range": "Melee Attack",
        "Target": "One Creature",
        "Fluff": "Divine energy surrounds your weapon as you strike. This power washes over you as your weapon finds its mark, mending your wounds and giving you the strength to fight on.",
        "Effect": "As part of initiating this strike, you must make a successful melee attack against an enemy whose alignment has at least one component different from yours. This foe must pose a threat to you or your allies in some direct, immediate way. If your attack hits, you or an ally within 10 feet of you heals 1d6 points of damage + 1 point per initiator level (maximum +5)."
      },
      "Vanguard Strike": {
        "Level": "Crusader 1",
        "Initiation Action": "1 Standard Action",
        "Range": "Melee Attack",
        "Target": "One Creature",
        "Fluff": "You batter aside your foes defenses with a vicious, overwhelming attack, leaving him vulnerable to your allies' blows.",
        "Effect": "As part of this maneuver, you make a melee attack against an opponent you threaten. If this attack hits, all your allies within 30ft of the target gain a +4 bonus on ranged and melee attacks against the target until the start of your next turn."
      },
      "Stone Bones": {
        "Level": "Crusader 1, Swordsage 1, Warblade 1",
        "Initiation Action": "1 Standard Action",
        "Range": "Personal",
        "Target": "You",
        "Fluff": "You focus your energy to enhance your defenses, drawing on the power of your weapon's impact with a foe to toughen yourself against a counterattack.",
        "Effect": "When you use this maneuver, you make a single melee attack. If this attack hits, you gain damage reduction 5/adamantine for 1 round."
      },
      "Douse the Flames": {
        "Level": "Crusader 1, Warblade 1",
        "Initiation Action": "1 Standard Action",
        "Range": "Melee attack",
        "Target": "One Creature",
        "Duration": "1 round",
        "Fluff": "You strike your enemy with a resounding blow, capturing his attention. As he turns to look, you let loose with a string of oaths, challenges, and taunts that force him to focus his attention on you.",
        "Effect": "As part of this maneuver, you make a melee attack against a single target you threaten. If your attack hits, you deal normal melee damage, and the target creature can't make attacks of opportunity for 1 round. The opponent still threatens its normal area; it simply cannot make attacks of opportunity."
      },
      "Leading the Attack": {
        "Level": "Crusader 1, Warblade 1",
        "Initiation Action": "1 Standard Action",
        "Range": "Melee attack; 60 ft",
        "Target": "One Creature",
        "Duration": "1 round",
        "Fluff": "You boldly strike at your enemy. As you attack, you shout a war cry to demonstrate that victory is at hand. This attack inspires nearby allies to join the fray with renewed vigor.",
        "Effect": "As part of this maneuver, you make a single melee attack. If your attack is successful, your allies gain a +4 morale bonus on attack rolls for 1 round against the creature you hit. You are your own ally."
      }
    };

    this.stancesKnown = {
      "Iron Guard's Glare": {
        "Level": "Crusader 1",
        "Initiation Action": "1 Swift Action",
        "Range": "Personal",
        "Target": "You",
        "Duration": "Stance",
        "Fluff": "With a quick snarl and a glare that would stop a charging barbarian in his tracks, you spoil an opponent’s attack. Rather than strike his original target, your enemy turns his attention toward you.",
        "Effect": "While you are in this stance, any opponent that you threaten takes a -4 penalty on attack rolls against your allies. This penalty does not apply to attacks made against you. Enemies you threaten become aware of the consequences of the stance."
      },
      /*Unlocked at level 2"Leading the Charge": {
        "Level": "Crusader 1, Warblade 1",
        "Initiation Action": "1 Swift Action",
        "Range": "60 ft",
        "Area": "60-ft-radius emanation centered on you",
        "Duration": "Stance",
        "Fluff": "You fire the confidence and martial spirit of your allies, giving them the energy and bravery needed to make a devastating charge against your enemies.",
        "Effect": "While you are in this stance, all allies who hear you and make a charge attack in the area gain a bonus on damage rolls equal to your initiator level. You are your own ally."
      }*/
      /*Unlocked at Level 5"Child of Shadow": {
        "Level": "Swordsage 1",
        "Initiation Action": "1 Swift Action",
        "Range": "Personal",
        "Target": "You",
        "Duration": "Stance",
        "Fluff": "As you move, shadows flutter and swarm around you. Even under the bright desert sun, you are difficult to spot as long as you remain in motion.",
        "Effect": "If you move at least 10 feet during your turn, you gain concealment against all melee and ranged attacks until the start of your next turn. You also gain the standard benefits of concealment, but you cannot use this stance to hide in plain sight; you must still use some other terrain feature that normally allows you to use the Hide skill. The fluttering shadows make it difficult to specifically target you, but your enemies are aware of your position. This maneuver is a supernatural ability."
      },*/
      /*Unlocked at Level 10"Dance of the Spider": {
        "Level": "Swordsage 1",
        "Initiation Action": "1 Swift Action",
        "Range": "Personal",
        "Target": "You",
        "Duration": "Stance",
        "Fluff": "Black, shadowy energy covers your hands and feet, allowing you to scuttle across the walls and ceiling like a lurking spider.",
        "Effect": "While you are in this stance, you gain a benefit similar to the spider climb spell (PH 283). You gain a climb speed of 20 feet. You do not need to make a Climb check to traverse a vertical or horizontal surface, even if you attempt to move across a ceiling. You retain your Dexterity bonus to AC while climbing, and you must have at least one hand free to support yourself while you climb. You take no penalties for climbing in this way, but other penalties can still apply. Likewise, enemies still gain bonuses for attacking you, unless those bonuses are because you are climbing. You cannot take a run action while climbing in this manner. This maneuver is a supernatural ability."
      }*/
    };

    this.swordsageManeuversKnown = {
      /*Unlocked at Level 5"Burning Blade": {
        "Level": "Swordsage 1",
        "Initiation Action": "1 Swift Action",
        "Range": "Personal",
        "Target": "You",
        "Duration": "End of Turn",
        "Fluff": "Your blade bursts into flame as it sweeps toward your foe in an elegant arc.",
        "Effect": "For the rest of your turn, your melee attacks deal an extra 1d6 points of fire damage + 1 point per initiator level."
      },
      "Moment of Perfect Mind": {
        "Level": "Swordsage 1, Warblade 1",
        "Initiation Action": "1 Immediate Action",
        "Range": "Personal",
        "Target": "You",
        "Fluff": "Your mental focus and martial study have rendered your will into an unbreakable iron wall. When someone targets you with a spell that seeks to erode your willpower, you steel yourself against the attack.",
        "Effect": "You can use this maneuver any time you would be required to make a Will save. Make a Concentration check instead of the Will save and use the result of that check to determine the save's success. You must use this maneuver before you attempt the Will save. A result of a natural 1 on your Concentration check is not an automatic failure. You may still fail the save if your Concentration check's results are lower than the save DC."
      },
      "Action Before Thought": {
        "Level": "Swordsage 2, Warblade 2",
        "Initiation Action": "1 Immediate Action",
        "Range": "Personal",
        "Target": "You",
        "Fluff": "Your supreme sense of the battlefield, unmatched martial training, and simple, intuitive sense of danger allow you to act faster than the speed of thought. When a spell or other attack strikes you, you move a split second before you are even aware of the threat.",
        "Effect": "You can use this maneuver any time you would be required to make a Reflex save. Roll a Concentration check instead of the Reflex save and use the result of that check to determine the save's success. You must use this maneuver before you roll the Reflex save. A result of a natural 1 on your Concentration check is not an automatic failure. You may still fail the save if your Concentration check's results are lower than the save DC."
      },*/
      /*Unlocked at Level 10"Mind over Body": {
        "Level": "Swordsage 3, Warblade 3",
        "Initiation Action": "1 Immediate Action",
        "Range": "Personal",
        "Target": "You",
        "Fluff": "Your training and mental toughness allow you to use your focus to overcome physical threats. By focusing your mind, you ignore the effect of a deadly poison or debilitating sickness.",
        "Effect": "You can use this maneuver any time you would be required to make a Fortitude save. Make a Concentration check instead of the Fortitude save and use the result of that check to determine the save's success. You must use this maneuver before you attempt the Fortitude save. A result of a natural 1 on your Concentration check is not an automatic failure. You may still fail the save if your Concentration check's results are lower than the save DC."
      },*/
      /*Unlocked at level 5"Cloak of Deception": {
        "Level": "Swordsage 2, Warblade 2",
        "Initiation Action": "1 Immediate Action",
        "Range": "Personal",
        "Target": "You",
        "Duration": "End of turn",
        "Fluff": "The shadows around you seem to surge forward and engulf you. For a brief moment, they render you invisible.",
        "Effect": "When you initiate this maneuver, you turn invisible, as the greater invisibility spell (PH 245). You remain invisible until the end of your current turn. This maneuver is a supernatural ability."
      },
      "Shadow Jaunt": {
        "Level": "Swordsage 2",
        "Initiation Action": "1 Standard Action",
        "Range": "50ft",
        "Target": "You",
        "Fluff": "A cloud of shadow energy engulfs you, spins into a tiny mote, and disappears. A moment later, this shadowy cloud appears across the battlefield and expels you from it.",
        "Effect": "As part of this maneuver, you disappear in a cloud of darkness and teleport up to 50 feet away. You must have line of sight and line of effect to your destination. If you attempt to use this maneuver to move into an occupied space, you do not move, and the maneuver is expended but has no effect. You can bring up to your maximum carrying capacity +50lbs with you when you initiate this maneuver. You cannot bring living creatures with you."
      },*/
    }
  }

  public getClassAndLevel() {
    let classText = "";
    let moreThanOne = false;
    for(let classUsed in this.classesUsed) {
      if (moreThanOne) {
        classText = classText + "/";
      }
      classText = classText + classUsed + " " + this.classesUsed[classUsed].Levels;
      moreThanOne = true;
    }
    return classText;
  }

  public setAttribute(stat, score) {
    this.attributes[stat] = score;
  }

  public getStatBonus(stat) {
    return Math.floor((this.attributes[stat] - 10)/2);
  }

  public getCappedDexMod() {
    let dex = this.getStatBonus("DEX");
    let cap = this.equipment.getDexCap();
    if (cap !== null && dex > cap) {
      return cap;
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
