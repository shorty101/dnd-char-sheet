import { Component, OnInit } from '@angular/core';
import { CharSheetStatsService } from './../../services/char-sheet-stats.service';

@Component({
  selector: 'app-character-save-details',
  templateUrl: './character-save-details.component.html',
  styleUrls: ['./character-save-details.component.css']
})
export class CharacterSaveDetailsComponent implements OnInit {
  public Fort: number;
  public Reflex: number;
  public Will: number;

  constructor(public stats: CharSheetStatsService) { }

  ngOnInit() {
    this.Fort = this.stats.getStatBonus("CON") + this.stats.calculateSaveBonus("Fort");
    this.Reflex = this.stats.getCappedDexMod() + this.stats.calculateSaveBonus("Ref");
    this.Will = this.stats.getStatBonus("WIS") + this.stats.calculateSaveBonus("Will");
  }
}
