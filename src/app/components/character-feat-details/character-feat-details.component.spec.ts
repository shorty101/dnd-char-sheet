import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterFeatDetailsComponent } from './character-feat-details.component';

describe('CharacterFeatDetailsComponent', () => {
  let component: CharacterFeatDetailsComponent;
  let fixture: ComponentFixture<CharacterFeatDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterFeatDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterFeatDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
