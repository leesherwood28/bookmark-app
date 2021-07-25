import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Bookmark } from 'src/app/core/bookmark/bookmark';

@Component({
  selector: 'app-bookmark-saved-page',
  templateUrl: './bookmark-saved-page.component.html',
  styleUrls: ['./bookmark-saved-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookmarkSavedPageComponent implements OnInit {
  savedBookmark!: Observable<Bookmark>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.route);
  }
}
