import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterAttributeDetailsComponent } from './character-attribute-details.component';

describe('CharacterAttributeDetailsComponent', () => {
  let component: CharacterAttributeDetailsComponent;
  let fixture: ComponentFixture<CharacterAttributeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterAttributeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterAttributeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
