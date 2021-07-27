import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { bounceInOnEnterAnimation } from 'angular-animations';
import { markForCheck } from 'src/app/core/operators/mark-for-check.operator';
import { isNil } from 'src/app/core/util/is-nil.fn';
import { Bookmark } from '../shared/bookmark';
import { BookmarkService } from '../shared/bookmark.service';

@UntilDestroy()
@Component({
  selector: 'app-bookmark-editor',
  templateUrl: './bookmark-editor.component.html',
  styleUrls: ['./bookmark-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [bounceInOnEnterAnimation()],
})
export class BookmarkEditorComponent implements OnInit {
  bookmarkForm!: FormGroup;
  nameControl!: FormControl;
  urlControl!: FormControl;
  bookmarkId!: string | null;

  @Output() readonly bookmarkAdded = new EventEmitter<string>();
  @Output() readonly bookmarkUpdated = new EventEmitter<string>();

  constructor(private bookmarkService: BookmarkService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.setupForm();
    this.updateOnSelectedBookmarkChange();
  }

  /**
   * Saves the context bookmark to the bookmark store
   */
  saveBookmark() {
    if (this.bookmarkForm.invalid) {
      return;
    }
    if (this.bookmarkId) {
      this.updateBookmark();
    } else {
      this.addBookmark();
    }
  }

  /**
   * Adds the forms bookmark to the global state
   */
  private addBookmark() {
    const newBookmarkId = this.bookmarkService.addBookmark({
      name: this.nameControl.value,
      url: this.urlControl.value,
    });
    this.bookmarkAdded.emit(newBookmarkId);
  }

  /**
   * Updates the forms bookmark in the global state
   */
  private updateBookmark() {
    if (isNil(this.bookmarkId)) {
      throw new Error('Attempting to update bookmark with no id');
    }
    this.bookmarkService.updateBookmark({
      id: this.bookmarkId,
      name: this.nameControl.value,
      url: this.urlControl.value,
    });
    this.bookmarkUpdated.emit(this.bookmarkId);
  }

  /**
   * Clears the form
   */
  clearForm() {
    this.bookmarkForm.setValue(
      {
        name: '',
        url: '',
      },
      { emitEvent: false }
    );
  }

  /**
   * Sets up the form
   */
  private setupForm() {
    this.nameControl = new FormControl();
    this.urlControl = new FormControl();
    this.bookmarkForm = new FormGroup({
      name: this.nameControl,
      url: this.urlControl,
    });
  }

  /**
   * Updates the view for selected bookmark changes
   */
  private updateOnSelectedBookmarkChange() {
    this.bookmarkService
      .selectSelectedBookmark()
      .pipe(untilDestroyed(this), markForCheck(this.cd))
      .subscribe((bookmark) => this.displaySelectedBookmark(bookmark));
  }

  /**
   * Disiplays the selected bookmark
   * @param {Bookmark | undefined} bookmark The bookmark to display
   */
  private displaySelectedBookmark(bookmark: Bookmark | undefined) {
    if (isNil(bookmark)) {
      this.bookmarkId = null;
    } else {
      this.bookmarkForm.setValue(
        {
          name: bookmark.name,
          url: bookmark.url,
        },
        { emitEvent: false }
      );
      this.bookmarkId = bookmark.id;
    }
  }
}
