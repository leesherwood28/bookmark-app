import { ChangeDetectionStrategy, Component } from '@angular/core';
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

  /**
   * Stores currently requested page for the bookmark list
   */
  readonly requestedPage$ = new BehaviorSubject<Page>({
    pageIndex: 0,
    pageSize: this.pageSize,
  });

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
}
