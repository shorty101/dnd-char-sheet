import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCombatStatisticsComponent } from './character-combat-statistics.component';

describe('CharacterCombatStatisticsComponent', () => {
  let component: CharacterCombatStatisticsComponent;
  let fixture: ComponentFixture<CharacterCombatStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterCombatStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCombatStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
