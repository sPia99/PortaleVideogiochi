import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDetailsComponentComponent } from './game-details-component.component';

describe('GameDetailsComponentComponent', () => {
  let component: GameDetailsComponentComponent;
  let fixture: ComponentFixture<GameDetailsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameDetailsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
