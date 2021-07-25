import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-bookmark-editor',
  templateUrl: './bookmark-editor.component.html',
  styleUrls: ['./bookmark-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookmarkEditorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
