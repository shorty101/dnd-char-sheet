import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterArmourClassComponent } from './character-armour-class.component';

describe('CharacterArmourClassComponent', () => {
  let component: CharacterArmourClassComponent;
  let fixture: ComponentFixture<CharacterArmourClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterArmourClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterArmourClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
