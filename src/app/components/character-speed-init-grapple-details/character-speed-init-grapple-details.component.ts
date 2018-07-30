import { Component, OnInit } from '@angular/core';
import { CharSheetStatsService } from '../../services/char-sheet-stats.service';


@Component({
  selector: 'app-character-speed-init-grapple-details',
  templateUrl: './character-speed-init-grapple-details.component.html',
  styleUrls: ['./character-speed-init-grapple-details.component.css']
})
export class CharacterSpeedInitGrappleDetailsComponent implements OnInit {
  public initBonus: number;
  public speed: number;
  public grapple: number;

  constructor(public stats: CharSheetStatsService) { }

  ngOnInit() {
    this.initBonus = this.stats.getCappedDexMod();
    if ("Improved Initiative" in this.stats.feats) {
      this.initBonus = this.initBonus + 4;
    }
    this.speed = Math.max(this.stats.characterTraits.Speed, this.stats.armour.MaxSpeed);
    this.grapple = this.stats.getStatBonus("STR") + this.stats.getBAB() + this.stats.sizeTable[this.stats.characterTraits.Size].Grapple;
  }

}
