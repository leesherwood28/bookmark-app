import { Injectable, Optional } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { Guid } from 'guid-typescript';
import { map } from 'rxjs/operators';
import { PagedData } from 'src/app/core/pagination/paged-data.model';
import { PaginationService } from 'src/app/core/pagination/pagination.service';
import { Page } from 'src/app/core/pagination/page.model';
import { Store } from 'src/app/core/store/store';
import { PersistStorageProviderService } from 'src/app/core/store/persist-storage-provider.service';
import { Bookmark } from './bookmark';
import { BookmarkAdd } from './bookmark-add';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  private readonly bookmarkStore = new Store<Bookmark[]>(
    'bookmarks',
    [],
    this.persistStore
  );

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
}
