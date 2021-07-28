import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { SaveType } from 'src/app/core/generic/save-type.type';
import { Bookmark } from '../shared/bookmark';
import { BookmarkService } from '../shared/bookmark.service';
import { BookmarkSavedPageQueryParmas } from './bookmark-saved-page-query-params';

@Component({
  selector: 'app-bookmark-saved-page',
  templateUrl: './bookmark-saved-page.component.html',
  styleUrls: ['./bookmark-saved-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookmarkSavedPageComponent implements OnInit {
  /** Indicates the save type thats being displayed */
  saveType!: SaveType;
  /** Indicates the saved bookmark */
  savedBookmark$!: Observable<Bookmark | undefined>;

  constructor(private route: ActivatedRoute, private bookmarkService: BookmarkService) {}

  ngOnInit(): void {
    const routeSnapshot = this.route.snapshot;
    const params = routeSnapshot.queryParams as BookmarkSavedPageQueryParmas;
    this.saveType = params.type;
    this.savedBookmark$ = this.bookmarkService
      .selectBookmark(params.bookmarkId)
      // Take 1 since we only want the last snapshot of the data
      .pipe(take(1));
  }
}
