import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterHeaderDetailsComponent } from './character-header-details.component';

describe('CharacterHeaderDetailsComponent', () => {
  let component: CharacterHeaderDetailsComponent;
  let fixture: ComponentFixture<CharacterHeaderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterHeaderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterHeaderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
