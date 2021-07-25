import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { Guid } from 'guid-typescript';
import { map } from 'rxjs/operators';
import { Bookmark } from './bookmark';
import { BookmarkAdd } from './bookmark-add';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  // TODO store in store service
  private readonly bookmarks$ = new BehaviorSubject<Bookmark[]>([]);

  private readonly selectedBookmarkId$ = new BehaviorSubject<string | null>(null);

  // TODO replace with pagination
  selectBookmarks(): Observable<Bookmark[]> {
    return this.bookmarks$.asObservable();
  }

  selectSelectedBookmark(): Observable<Bookmark | undefined> {
    return combineLatest([this.bookmarks$, this.selectedBookmarkId$]).pipe(
      map(([bookmarks, selectedBookmarkId]) =>
        bookmarks.find((b) => b.id === selectedBookmarkId)
      )
    );
  }

  /**
   * Selects the bookmark with the provided id
   * @param {string} id The id of the bookmark to select
   * @return {Observable<Bookmark | undefined>} The selected bookmark
   */
  selectBookmark(id: string): Observable<Bookmark | undefined> {
    return this.bookmarks$.pipe(map((bookmarks) => bookmarks.find((b) => b.id === id)));
  }

  /**
   * Adds the provided bookmark to the stored bookmarks
   * @param {BookmarkAdd} newBookmark the new bookmark to add
   * @return {string} The id of the newly added bookmark
   */
  addBookmark(newBookmark: BookmarkAdd): string {
    const bookmarks = this.bookmarks$.value;
    const newBookmarkId = Guid.create().toString();
    bookmarks.push({
      name: newBookmark.name,
      url: newBookmark.url,
      id: newBookmarkId,
    });
    this.bookmarks$.next(bookmarks);
    return newBookmarkId;
  }
}
