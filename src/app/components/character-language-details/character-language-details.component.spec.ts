import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterLanguageDetailsComponent } from './character-language-details.component';

describe('CharacterLanguageDetailsComponent', () => {
  let component: CharacterLanguageDetailsComponent;
  let fixture: ComponentFixture<CharacterLanguageDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterLanguageDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterLanguageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
