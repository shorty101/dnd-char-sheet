import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CharacterSheetComponent } from './components/character-sheet/character-sheet.component';
import { CharacterHeaderDetailsComponent } from './components/character-header-details/character-header-details.component';
import { CharacterAttributeDetailsComponent } from './components/character-attribute-details/character-attribute-details.component';
import { CharacterAttackDetailsComponent } from './components/character-attack-details/character-attack-details.component';
import { CharacterCombatStatisticsComponent } from './components/character-combat-statistics/character-combat-statistics.component';
import { CharacterSaveDetailsComponent } from './components/character-save-details/character-save-details.component';
import { CharacterSkillDetailsComponent } from './components/character-skill-details/character-skill-details.component';
import { CharacterHitPointDetailsComponent } from './components/character-hit-point-details/character-hit-point-details.component';
import { CharacterRacialTraitDetailsComponent } from './components/character-racial-trait-details/character-racial-trait-details.component';
import { CharacterFeatDetailsComponent } from './components/character-feat-details/character-feat-details.component';
import { CharacterLanguageDetailsComponent } from './components/character-language-details/character-language-details.component';
import { CharacterClassFeatureDetailsComponent } from './components/character-class-feature-details/character-class-feature-details.component';
import { CharacterArmourClassComponent } from './components/character-armour-class/character-armour-class.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterSheetComponent,
    CharacterHeaderDetailsComponent,
    CharacterAttributeDetailsComponent,
    CharacterAttackDetailsComponent,
    CharacterCombatStatisticsComponent,
    CharacterSaveDetailsComponent,
    CharacterSkillDetailsComponent,
    CharacterHitPointDetailsComponent,
    CharacterRacialTraitDetailsComponent,
    CharacterFeatDetailsComponent,
    CharacterLanguageDetailsComponent,
    CharacterClassFeatureDetailsComponent,
    CharacterArmourClassComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
