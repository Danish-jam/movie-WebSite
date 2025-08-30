import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTvshowsComponent } from './info-tvshows.component';

describe('InfoTvshowsComponent', () => {
  let component: InfoTvshowsComponent;
  let fixture: ComponentFixture<InfoTvshowsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoTvshowsComponent]
    });
    fixture = TestBed.createComponent(InfoTvshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
