import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesItemComponent } from './movies-item.component';

describe('MoviesItemComponent', () => {
  let component: MoviesItemComponent;
  let fixture: ComponentFixture<MoviesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
