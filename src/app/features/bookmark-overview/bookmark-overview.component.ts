import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { Bookmark } from 'src/app/core/bookmark/bookmark';

@Component({
  selector: 'app-bookmark-overview',
  templateUrl: './bookmark-overview.component.html',
  styleUrls: ['./bookmark-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookmarkOverviewComponent implements OnChanges {
  @Input() bookmark!: Bookmark;
}
