import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CharacterSheetComponent } from './components/character-sheet/character-sheet.component';
import { CharacterHeaderDetailsComponent } from './components/character-header-details/character-header-details.component';
import { CharacterAttributeDetailsComponent } from './components/character-attribute-details/character-attribute-details.component';
import { CharacterAttackDetailsComponent } from './components/character-attack-details/character-attack-details.component';
import { CharacterSpeedInitGrappleDetailsComponent } from './components/character-speed-init-grapple-details/character-speed-init-grapple-details.component';
import { CharacterSaveDetailsComponent } from './components/character-save-details/character-save-details.component';
import { CharacterSkillDetailsComponent } from './components/character-skill-details/character-skill-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterSheetComponent,
    CharacterHeaderDetailsComponent,
    CharacterAttributeDetailsComponent,
    CharacterAttackDetailsComponent,
    CharacterSpeedInitGrappleDetailsComponent,
    CharacterSaveDetailsComponent,
    CharacterSkillDetailsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
