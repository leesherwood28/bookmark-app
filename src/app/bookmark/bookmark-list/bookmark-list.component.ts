import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Page } from 'src/app/core/pagination/page.model';
import { PagedData } from 'src/app/core/pagination/paged-data.model';
import { PaginationService } from 'src/app/core/pagination/pagination.service';
import { Bookmark } from '../shared/bookmark';
import { BookmarkService } from '../shared/bookmark.service';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookmarkListComponent implements OnInit {
  readonly pageSize = 5;
  readonly bookmarks$: Observable<Bookmark[]>;

  readonly requestedPage$ = new BehaviorSubject<Page>({
    pageIndex: 0,
    pageSize: this.pageSize,
  });

  readonly pagedBookmarks$: Subject<PagedData<Bookmark>> = this.requestedPage$.pipe(
    switchMap((page) => )
  );

  constructor(private bookmarkService: BookmarkService) {
    this.bookmarks$ = this.bookmarkService.selectBookmarks();
  }

  ngOnInit(): void {}

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
