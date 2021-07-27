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

  /**
   * On bookmark save, navigates to the confirmation screen
   * @param {SaveType} saveType The type of save that was performed
   * @param {string} bookmarkId The id of the bookmark
   */
  navigateBookmarkSavedPage(saveType: SaveType, bookmarkId: string) {
    const params: BookmarkSavedPageQueryParmas = {
      bookmarkId,
      type: saveType,
    };
    this.router.navigate(['/success'], { queryParams: params });
  }
}
