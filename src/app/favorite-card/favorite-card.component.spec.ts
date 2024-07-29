import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteCardComponent } from './favorite-card.component';

describe('FavoriteCardComponent', () => {
  let component: FavoriteCardComponent;
  let fixture: ComponentFixture<FavoriteCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FavoriteCardComponent]
    });
    fixture = TestBed.createComponent(FavoriteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
