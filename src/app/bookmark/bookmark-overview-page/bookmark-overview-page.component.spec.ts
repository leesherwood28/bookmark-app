import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkOverviewPageComponent } from './bookmark-overview-page.component';

describe('OverviewPageComponent', () => {
  let component: BookmarkOverviewPageComponent;
  let fixture: ComponentFixture<BookmarkOverviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookmarkOverviewPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
