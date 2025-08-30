import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingShowsComponent } from './trending-shows.component';

describe('TrendingShowsComponent', () => {
  let component: TrendingShowsComponent;
  let fixture: ComponentFixture<TrendingShowsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrendingShowsComponent]
    });
    fixture = TestBed.createComponent(TrendingShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
