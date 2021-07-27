import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { PageEvent } from '@angular/material/paginator';
import { BehaviorSubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Page } from 'src/app/core/pagination/page.model';
import { Bookmark } from '../shared/bookmark';
import { BookmarkService } from '../shared/bookmark.service';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookmarkListComponent {
  readonly pageSize = 5;

  readonly initalPage: Page = {
    pageIndex: 0,
    pageSize: this.pageSize,
  };

  /**
   * Stores currently requested page for the bookmark list
   */
  readonly requestedPage$ = new BehaviorSubject<Page>(this.initalPage);

  /**
   * The currently viewing paged bookmark data
   */
  readonly pagedBookmarks$ = this.requestedPage$.pipe(
    switchMap((page) => this.bookmarkService.selectPagedBookmarks(page))
  );

  readonly selectedBookmarkId$ = this.bookmarkService
    .selectSelectedBookmark()
    .pipe(map((b) => b?.id));

  constructor(private bookmarkService: BookmarkService) {}

  /**
   * Updates the requested page state
   * with the provided page event
   * @param {PageEvent} pageEvent The new page details
   */
  changePage(pageEvent: PageEvent) {
    this.requestedPage$.next({
      pageIndex: pageEvent.pageIndex,
      pageSize: pageEvent.pageSize,
    });
  }

  /**
   * Updates the selected bookmark with the provided bookmark id
   * @param {string} bookmarkId The bookmark to select
   */
  setSelectedBookmark(bookmarkId: string) {
    this.bookmarkService.setSelectedBookmark(bookmarkId);
  }

  /**
   * Deletes the bookmark with the provided id
   * @param {string} bookmarkId The id of the bookmark to delete
   */
  deleteBookmark(bookmarkId: string) {
    this.bookmarkService.deleteBookmark(bookmarkId);
  }

  /**
   *Identifies uniquely a bookmark in the list
   * @param {number} index The index of the bookmark
   * @param {Bookmark} bookmark The bookmark to identify
   * @return {string} the identifier of the bookmark
   */
  bookmarkIdentifier(index: number, bookmark: Bookmark): string {
    return bookmark.id;
  }
}
