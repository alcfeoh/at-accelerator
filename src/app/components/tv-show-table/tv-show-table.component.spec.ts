import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowTableComponent } from './tv-show-table.component';

describe('TvShowTableComponent', () => {
  let component: TvShowTableComponent;
  let fixture: ComponentFixture<TvShowTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TvShowTableComponent]
    });
    fixture = TestBed.createComponent(TvShowTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
