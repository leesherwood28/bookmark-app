import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-bookmark-saved-page',
  templateUrl: './bookmark-saved-page.component.html',
  styleUrls: ['./bookmark-saved-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookmarkSavedPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
