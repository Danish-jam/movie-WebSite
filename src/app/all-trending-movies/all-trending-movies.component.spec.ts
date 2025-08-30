import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTrendingMoviesComponent } from './all-trending-movies.component';

describe('AllTrendingMoviesComponent', () => {
  let component: AllTrendingMoviesComponent;
  let fixture: ComponentFixture<AllTrendingMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllTrendingMoviesComponent]
    });
    fixture = TestBed.createComponent(AllTrendingMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
