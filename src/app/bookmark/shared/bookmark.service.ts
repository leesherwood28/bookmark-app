import { Injectable, Optional } from '@angular/core';
import { Guid } from 'guid-typescript';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Page } from 'src/app/core/pagination/page.model';
import { PagedData } from 'src/app/core/pagination/paged-data.model';
import { PaginationService } from 'src/app/core/pagination/pagination.service';
import { PersistStorageProviderService } from 'src/app/core/store/persist-storage-provider.service';
import { Store } from 'src/app/core/store/store';
import { Bookmark } from './bookmark';
import { BookmarkAdd } from './bookmark-add';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  private readonly bookmarkStore = new Store<Bookmark[]>({
    key: 'bookmarks',
    initState: [],
    persistentStorageProvider: this.persistStore,
  });

  private readonly selectedBookmarkId$ = new BehaviorSubject<string | null>(null);

  constructor(
    private paginationService: PaginationService,
    @Optional() private persistStore: PersistStorageProviderService
  ) {}

  /**
   * Selects a page of bookmarks for the provided
   * requested page
   * @param {Page} requestePage The requested page
   * @return {Observable<PagedData<Bookmark>>} Observable of paged data
   */
  selectPagedBookmarks(requestePage: Page): Observable<PagedData<Bookmark>> {
    return this.bookmarkStore
      .selectState()
      .pipe(
        map((records) => this.paginationService.getPagedRecords(records, requestePage))
      );
  }

  /**
   * Selects the selected bookmark
   * @return {Observable<Bookmark | undefined>} the selected bookmark
   */
  selectSelectedBookmark(): Observable<Bookmark | undefined> {
    return combineLatest([
      this.bookmarkStore.selectState(),
      this.selectedBookmarkId$,
    ]).pipe(
      map(([bookmarks, selectedBookmarkId]) =>
        bookmarks.find((b) => b.id === selectedBookmarkId)
      )
    );
  }

  /**
   * Sets the selected bookmark
   * @param {string | null} bookmarkId the id of the bookmark to set
   */
  setSelectedBookmark(bookmarkId: string | null) {
    this.selectedBookmarkId$.next(bookmarkId);
  }

  /**
   * Selects the bookmark with the provided id
   * @param {string} id The id of the bookmark to select
   * @return {Observable<Bookmark | undefined>} The selected bookmark
   */
  selectBookmark(id: string): Observable<Bookmark | undefined> {
    return this.bookmarkStore
      .selectState()
      .pipe(map((bookmarks) => bookmarks.find((b) => b.id === id)));
  }

  /**
   * Adds the provided bookmark to the stored bookmarks
   * @param {BookmarkAdd} newBookmark the new bookmark to add
   * @return {string} The id of the newly added bookmark
   */
  addBookmark(newBookmark: BookmarkAdd): string {
    const bookmarks = this.bookmarkStore.getState();
    const newBookmarkId = Guid.create().toString();
    bookmarks.push({
      name: newBookmark.name,
      url: newBookmark.url,
      id: newBookmarkId,
    });
    this.bookmarkStore.setState(bookmarks);
    return newBookmarkId;
  }

  /**
   * Updates the provided bookmark
   * @param {Bookmark} bookmark the bookmark to update
   */
  updateBookmark(bookmark: Bookmark) {
    const bookmarks = this.bookmarkStore.getState();
    const bookmarkToEditIndex = bookmarks.findIndex((b) => b.id === bookmark.id);
    // If we dont find the bookmark, possibly because the user
    // cleared their data, then just add it instead
    if (bookmarkToEditIndex === -1) {
      this.addBookmark(bookmark);
    }
    bookmarks[bookmarkToEditIndex] = bookmark;
    this.bookmarkStore.setState(bookmarks);
  }
}
