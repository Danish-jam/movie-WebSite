import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularTvshowComponent } from './popular-tvshow.component';

describe('PopularTvshowComponent', () => {
  let component: PopularTvshowComponent;
  let fixture: ComponentFixture<PopularTvshowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopularTvshowComponent]
    });
    fixture = TestBed.createComponent(PopularTvshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
