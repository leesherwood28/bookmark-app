import { TestBed } from '@angular/core/testing';

import { BookmarkSavedPageGuard } from './bookmark-saved-page.guard';

describe('BookmarkSavedPageGuard', () => {
  let guard: BookmarkSavedPageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BookmarkSavedPageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
