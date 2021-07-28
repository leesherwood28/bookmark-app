import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { bounceInOnEnterAnimation } from 'angular-animations';
import { markForCheck } from 'src/app/core/operators/mark-for-check.operator';
import { isNil } from 'src/app/core/util/is-nil.fn';
import { CustomValidators } from 'src/app/core/valdiators/validators';
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
   * @return {boolean} Value to cancel form submission
   */
  saveBookmark(): boolean {
    if (this.bookmarkForm.invalid) {
      this.bookmarkForm.markAllAsTouched();
      return false;
    }
    if (this.bookmarkId) {
      this.updateBookmark();
    } else {
      this.addBookmark();
    }
    return false;
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
   * Clears the form and resets touched status
   */
  clearForm() {
    this.setFormFieldsToEmptyValues();
    this.bookmarkForm.markAsUntouched();
  }

  /**
   * Cancels bookmark edit
   */
  cancelEdit() {
    this.bookmarkService.setSelectedBookmark(null);
  }

  /**
   * Sets the form to empty values
   */
  private setFormFieldsToEmptyValues() {
    this.bookmarkForm.setValue({
      name: '',
      url: '',
    });
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
   * Sets up the form
   */
  private setupForm() {
    this.nameControl = new FormControl('', [
      CustomValidators.required,
      CustomValidators.maxLength(10),
      (c) => this.nameTakenValidator(c),
    ]);
    this.urlControl = new FormControl('', [
      CustomValidators.required,
      CustomValidators.url,
    ]);
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
      this.resetFormToEmptyView();
    } else {
      this.setFormForBookmark(bookmark);
    }
  }

  /**
   * Sets the form for the provided bookmark
   * @param {Bookmark} bookmark the bookmark to set the form for
   */
  private setFormForBookmark(bookmark: Bookmark) {
    this.bookmarkId = bookmark.id;
    this.bookmarkForm.setValue({
      name: bookmark.name,
      url: bookmark.url,
    });
    this.bookmarkForm.markAsUntouched();
  }

  /**
   * Resets the form back to empty addition
   */
  private resetFormToEmptyView() {
    this.bookmarkId = null;
    this.setFormFieldsToEmptyValues();
    this.bookmarkForm.markAsUntouched();
  }

  /**
   * Validates that the bookmark name is not
   * already taken
   * @param {AbstractControl} control The name control to validate
   * @return {ValidationErrors | null} The validation erros
   */
  private nameTakenValidator(control: AbstractControl): ValidationErrors | null {
    const bookmarks = this.bookmarkService.getBookmarks();
    const matchingBookmark = bookmarks.find((b) => b.name === control.value);
    const isValid = isNil(matchingBookmark) || matchingBookmark.id === this.bookmarkId;
    return isValid ? null : { nameTaken: true };
  }
}
