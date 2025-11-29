import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentlyTvshowComponent } from './currently-tvshow.component';

describe('CurrentlyTvshowComponent', () => {
  let component: CurrentlyTvshowComponent;
  let fixture: ComponentFixture<CurrentlyTvshowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentlyTvshowComponent]
    });
    fixture = TestBed.createComponent(CurrentlyTvshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
