import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookmarkService } from '../shared/bookmark.service';

@Component({
  selector: 'app-bookmark-editor',
  templateUrl: './bookmark-editor.component.html',
  styleUrls: ['./bookmark-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookmarkEditorComponent implements OnInit {
  bookmarkForm!: FormGroup;
  nameControl!: FormControl;
  urlControl!: FormControl;

  @Output() readonly bookmarkAdded = new EventEmitter<string>();

  constructor(private bookmarkService: BookmarkService) {}

  ngOnInit(): void {
    this.setupForm();
  }

  saveBookmark() {
    if (this.bookmarkForm.invalid) {
      return;
    }

    const newBookmarkId = this.bookmarkService.addBookmark({
      name: this.nameControl.value,
      url: this.urlControl.value,
    });

    this.bookmarkAdded.emit(newBookmarkId);
  }

  private setupForm() {
    this.nameControl = new FormControl();
    this.urlControl = new FormControl();
    this.bookmarkForm = new FormGroup({
      name: this.nameControl,
      url: this.urlControl,
    });
  }
}
