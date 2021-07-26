import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { PageEvent } from '@angular/material/paginator';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Page } from 'src/app/core/pagination/page.model';
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
   * Updates the selected bookmark from the provided
   * selection change
   * @param {MatSelectionListChange} selectionChange the selection change
   */
  updateSelectedBookmark(selectionChange: MatSelectionListChange) {
    this.bookmarkService.setSelectedBookmark(selectionChange.options[0].value);
  }
}
