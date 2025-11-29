import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NowplayingMoviesComponent } from './nowplaying-movies.component';

describe('NowplayingMoviesComponent', () => {
  let component: NowplayingMoviesComponent;
  let fixture: ComponentFixture<NowplayingMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NowplayingMoviesComponent]
    });
    fixture = TestBed.createComponent(NowplayingMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
