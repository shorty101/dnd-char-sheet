import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterHitPointDetailsComponent } from './character-hit-point-details.component';

describe('CharacterHitPointDetailsComponent', () => {
  let component: CharacterHitPointDetailsComponent;
  let fixture: ComponentFixture<CharacterHitPointDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterHitPointDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterHitPointDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
