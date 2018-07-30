import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterRacialTraitDetailsComponent } from './character-racial-trait-details.component';

describe('CharacterRacialTraitDetailsComponent', () => {
  let component: CharacterRacialTraitDetailsComponent;
  let fixture: ComponentFixture<CharacterRacialTraitDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterRacialTraitDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterRacialTraitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
