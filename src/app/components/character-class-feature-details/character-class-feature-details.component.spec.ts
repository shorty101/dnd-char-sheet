import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterClassFeatureDetailsComponent } from './character-class-feature-details.component';

describe('CharacterClassFeatureDetailsComponent', () => {
  let component: CharacterClassFeatureDetailsComponent;
  let fixture: ComponentFixture<CharacterClassFeatureDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterClassFeatureDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterClassFeatureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
