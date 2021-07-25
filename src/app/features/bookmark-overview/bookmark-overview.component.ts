import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Bookmark } from 'src/app/core/bookmark/bookmark';
import { BookmarkService } from 'src/app/core/bookmark/bookmark.service';
import { isNil } from 'src/app/util/is-nil.fn';

@Component({
  selector: 'app-bookmark-overview',
  templateUrl: './bookmark-overview.component.html',
  styleUrls: ['./bookmark-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookmarkOverviewComponent implements OnChanges {
  @Input() bookmarkId!: string;

  bookmark$!: Observable<Bookmark | undefined>;

  constructor(private bookmarkService: BookmarkService) {}

  ngOnChanges(): void {
    if (isNil(this.bookmarkId)) {
      throw new Error('No bookmark id provided to control');
    }
    this.bookmark$ = this.bookmarkService.selectBookmark(this.bookmarkId);
  }
}
