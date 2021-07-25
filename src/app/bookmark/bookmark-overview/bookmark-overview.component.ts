import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Bookmark } from '../shared/bookmark';

@Component({
  selector: 'app-bookmark-overview',
  templateUrl: './bookmark-overview.component.html',
  styleUrls: ['./bookmark-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookmarkOverviewComponent {
  @Input() bookmark!: Bookmark | undefined;
}
