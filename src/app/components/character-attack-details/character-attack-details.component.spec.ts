import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterAttackDetailsComponent } from './character-attack-details.component';

describe('CharacterAttackDetailsComponent', () => {
  let component: CharacterAttackDetailsComponent;
  let fixture: ComponentFixture<CharacterAttackDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterAttackDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterAttackDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
