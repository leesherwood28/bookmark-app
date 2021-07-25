import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Bookmark } from 'src/app/core/bookmark/bookmark';
import { BookmarkService } from 'src/app/core/bookmark/bookmark.service';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookmarkListComponent implements OnInit {
  readonly bookmarks$: Observable<Bookmark[]>;

  constructor(private bookmarkService: BookmarkService) {
    this.bookmarks$ = this.bookmarkService.selectBookmarks();
  }

  ngOnInit(): void {}
}
