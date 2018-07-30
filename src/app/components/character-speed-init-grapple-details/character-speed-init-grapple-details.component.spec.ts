import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSpeedInitGrappleDetailsComponent } from './character-speed-init-grapple-details.component';

describe('CharacterSpeedInitGrappleDetailsComponent', () => {
  let component: CharacterSpeedInitGrappleDetailsComponent;
  let fixture: ComponentFixture<CharacterSpeedInitGrappleDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterSpeedInitGrappleDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSpeedInitGrappleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
