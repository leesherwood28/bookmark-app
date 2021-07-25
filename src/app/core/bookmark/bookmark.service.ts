import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Guid } from 'guid-typescript';
import { Bookmark } from './bookmark';
import { BookmarkAdd } from './bookmark-add';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  // TODO store in store service
  private bookmarks$ = new BehaviorSubject<Bookmark[]>([]);

  // TODO replace with pagination
  selectBookmarks(): Observable<Bookmark[]> {
    return this.bookmarks$.asObservable();
  }

  /**
   * Adds the provided bookmark to the stored bookmarks
   * @param {BookmarkAdd} newBookmark the new bookmark to add
   */
  addBookmark(newBookmark: BookmarkAdd) {
    const bookmarks = this.bookmarks$.value;
    bookmarks.push({
      label: newBookmark.label,
      url: newBookmark.url,
      id: Guid.create().toString(),
    });
  }
}
