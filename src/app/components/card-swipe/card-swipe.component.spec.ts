import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSwipeComponent } from './card-swipe.component';

describe('CardSwipeComponent', () => {
  let component: CardSwipeComponent;
  let fixture: ComponentFixture<CardSwipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSwipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSwipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
