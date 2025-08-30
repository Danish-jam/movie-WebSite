import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMovieComponent } from './info-movie.component';

describe('InfoMovieComponent', () => {
  let component: InfoMovieComponent;
  let fixture: ComponentFixture<InfoMovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoMovieComponent]
    });
    fixture = TestBed.createComponent(InfoMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
