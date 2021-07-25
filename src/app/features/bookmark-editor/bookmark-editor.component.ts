import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookmarkService } from 'src/app/core/bookmark/bookmark.service';

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

  constructor(private bookmarkService: BookmarkService) {}

  ngOnInit(): void {
    this.setupForm();
  }

  saveBookmark() {
    if (this.bookmarkForm.invalid) {
      return;
    }

    this.bookmarkService.addBookmark({
      name: this.nameControl.value,
      url: this.urlControl.value,
    });
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
