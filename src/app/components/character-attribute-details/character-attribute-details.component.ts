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
    this.baseStr = this.stats.base_attributes.STR;
    this.baseDex = this.stats.base_attributes.DEX;
    this.baseCon = this.stats.base_attributes.CON;
    this.baseInt = this.stats.base_attributes.INT;
    this.baseWis = this.stats.base_attributes.WIS;
    this.baseCha = this.stats.base_attributes.CHA;
    this.STR = this.baseStr + this.enhanceStr + this.miscStrBonus + this.miscStrPenalty;
    this.DEX = this.baseDex + this.enhanceDex + this.miscDexBonus + this.miscDexPenalty;
    this.CON = this.baseCon + this.enhanceCon + this.miscConBonus + this.miscConPenalty;
    this.INT = this.baseInt + this.enhanceInt + this.miscIntBonus + this.miscIntPenalty;
    this.WIS = this.baseWis + this.enhanceWis + this.miscWisBonus + this.miscWisPenalty;
    this.CHA = this.baseCha + this.enhanceCha + this.miscChaBonus + this.miscChaPenalty;
    this.stats.setAttribute("STR", this.STR);
    this.stats.setAttribute("DEX", this.DEX);
    this.stats.setAttribute("CON", this.CON);
    this.stats.setAttribute("INT", this.INT);
    this.stats.setAttribute("WIS", this.WIS);
    this.stats.setAttribute("CHA", this.CHA);
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
