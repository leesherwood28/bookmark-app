import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkOverviewComponent } from './bookmark-overview.component';

describe('BookmarkOverviewComponent', () => {
  let component: BookmarkOverviewComponent;
  let fixture: ComponentFixture<BookmarkOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
