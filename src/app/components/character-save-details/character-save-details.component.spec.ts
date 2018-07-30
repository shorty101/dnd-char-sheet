import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSaveDetailsComponent } from './character-save-details.component';

describe('CharacterSaveDetailsComponent', () => {
  let component: CharacterSaveDetailsComponent;
  let fixture: ComponentFixture<CharacterSaveDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterSaveDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSaveDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
