import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter } from 'rxjs/operators';
import { SaveType } from 'src/app/core/generic/save-type.type';
import { isNil } from 'src/app/core/util/is-nil.fn';
import { BookmarkEditorComponent } from '../bookmark-editor/bookmark-editor.component';
import { BookmarkSavedPageQueryParmas } from '../bookmark-saved-page/bookmark-saved-page-query-params';
import { BookmarkService } from '../shared/bookmark.service';

@UntilDestroy()
@Component({
  selector: 'app-bookmark-overview-page',
  templateUrl: './bookmark-overview-page.component.html',
  styleUrls: ['./bookmark-overview-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookmarkOverviewPageComponent implements OnInit {
  @ViewChild(BookmarkEditorComponent, { read: ElementRef })
  editorComponent!: ElementRef<HTMLElement>;

  constructor(private router: Router, private bookmarkService: BookmarkService) {}

  ngOnInit() {
    this.ensureScrollToEditorOnBookmarkSelection();
  }

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

  /**
   * sets up such that on bookmark selection the bookmark editor
   * is scrolled into view
   */
  private ensureScrollToEditorOnBookmarkSelection() {
    this.bookmarkService
      .selectSelectedBookmark()
      .pipe(
        untilDestroyed(this),
        filter((b) => !isNil(b))
      )
      .subscribe(() =>
        this.editorComponent.nativeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'end',
          inline: 'nearest',
        })
      );
  }
}
