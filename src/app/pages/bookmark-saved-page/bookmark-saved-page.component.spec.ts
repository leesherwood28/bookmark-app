import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkSavedPageComponent } from './bookmark-saved-page.component';

describe('BookmarkSavedPageComponent', () => {
  let component: BookmarkSavedPageComponent;
  let fixture: ComponentFixture<BookmarkSavedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkSavedPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkSavedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
