import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { SaveType } from 'src/app/core/generic/save-type.type';
import { BookmarkSavedPageQueryParmas } from '../bookmark-saved-page/bookmark-saved-page-query-params';

@Component({
  selector: 'app-bookmark-overview-page',
  templateUrl: './bookmark-overview-page.component.html',
  styleUrls: ['./bookmark-overview-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookmarkOverviewPageComponent {
  constructor(private router: Router) {}

  navigateBookmarkSavedPage(saveType: SaveType, bookmarkId: string) {
    const params: BookmarkSavedPageQueryParmas = {
      bookmarkId,
      type: saveType,
    };
    this.router.navigate(['/success'], { queryParams: params });
  }
}
