import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopratedTvshowComponent } from './toprated-tvshow.component';

describe('TopratedTvshowComponent', () => {
  let component: TopratedTvshowComponent;
  let fixture: ComponentFixture<TopratedTvshowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopratedTvshowComponent]
    });
    fixture = TestBed.createComponent(TopratedTvshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
