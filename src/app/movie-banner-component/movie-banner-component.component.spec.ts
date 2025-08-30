import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieBannerComponentComponent } from './movie-banner-component.component';

describe('MovieBannerComponentComponent', () => {
  let component: MovieBannerComponentComponent;
  let fixture: ComponentFixture<MovieBannerComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieBannerComponentComponent]
    });
    fixture = TestBed.createComponent(MovieBannerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
