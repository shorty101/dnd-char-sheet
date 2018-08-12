import { Component, OnInit } from '@angular/core';
import { CharSheetStatsService } from '../../services/char-sheet-stats.service';

@Component({
  selector: 'app-character-attribute-details',
  templateUrl: './character-attribute-details.component.html',
  styleUrls: ['./character-attribute-details.component.css']
})
export class CharacterAttributeDetailsComponent implements OnInit {
  public STR: number;
  public DEX: number;
  public CON: number;
  public INT: number;
  public WIS: number;
  public CHA: number;
  public baseStr: number;
  public baseDex: number;
  public baseCon: number;
  public baseInt: number;
  public baseWis: number;
  public baseCha: number;
  public enhanceStr: number = 0;
  public enhanceDex: number = 0;
  public enhanceCon: number = 0;
  public enhanceInt: number = 0;
  public enhanceWis: number = 0;
  public enhanceCha: number = 0;
  public miscStrBonus: number = 0;
  public miscDexBonus: number = 0;
  public miscConBonus: number = 0;
  public miscIntBonus: number = 0;
  public miscWisBonus: number = 0;
  public miscChaBonus: number = 0;
  public miscStrPenalty: number = 0;
  public miscDexPenalty: number = 0;
  public miscConPenalty: number = 0;
  public miscIntPenalty: number = 0;
  public miscWisPenalty: number = 0;
  public miscChaPenalty: number = 0;

  constructor(public stats: CharSheetStatsService) { 
    this.baseStr = this.stats.attributes.STR;
    this.baseDex = this.stats.attributes.DEX;
    this.baseCon = this.stats.attributes.CON;
    this.baseInt = this.stats.attributes.INT;
    this.baseWis = this.stats.attributes.WIS;
    this.baseCha = this.stats.attributes.CHA;
    this.STR = this.baseStr + this.enhanceStr + this.miscStrBonus + this.miscStrPenalty;
    this.DEX = this.baseDex + this.enhanceDex + this.miscDexBonus + this.miscDexPenalty;
    this.CON = this.baseCon + this.enhanceCon + this.miscConBonus + this.miscConPenalty;
    this.INT = this.baseInt + this.enhanceInt + this.miscIntBonus + this.miscIntPenalty;
    this.WIS = this.baseWis + this.enhanceWis + this.miscWisBonus + this.miscWisPenalty;
    this.CHA = this.baseCha + this.enhanceCha + this.miscChaBonus + this.miscChaPenalty;
  }

  ngOnInit() {
  }

  public printStatBonus(stat) {
    let statBonus = this.stats.getStatBonus(stat);
    if (statBonus >= 0) {
      return this.addPlusBefore(statBonus);
    } else {
      return statBonus;
    }
  }

  public addPlusBefore(text) {
    return "+" + text;
  }
}
