import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiringtodayTvshowComponent } from './airingtoday-tvshow.component';

describe('AiringtodayTvshowComponent', () => {
  let component: AiringtodayTvshowComponent;
  let fixture: ComponentFixture<AiringtodayTvshowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AiringtodayTvshowComponent]
    });
    fixture = TestBed.createComponent(AiringtodayTvshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
