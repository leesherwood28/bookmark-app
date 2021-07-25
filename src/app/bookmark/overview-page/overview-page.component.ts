import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { SaveType } from 'src/app/core/generic/save-type.type';
import { BookmarkSavedPageQueryParmas } from '../bookmark-saved-page/bookmark-saved-page-query-params';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewPageComponent {
  constructor(private router: Router) {}

  navigateBookmarkSavedPage(saveType: SaveType, bookmarkId: string) {
    const params: BookmarkSavedPageQueryParmas = {
      bookmarkId,
      type: saveType,
    };
    this.router.navigate(['/success'], { queryParams: params });
  }
}
