import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookmarkRoutingModule } from './bookmark-routing.module';
import { BookmarkEditorComponent } from './bookmark-editor/bookmark-editor.component';
import { BookmarkListComponent } from './bookmark-list/bookmark-list.component';
import { BookmarkOverviewPageComponent } from './bookmark-overview-page/bookmark-overview-page.component';
import { BookmarkOverviewComponent } from './bookmark-overview/bookmark-overview.component';
import { BookmarkSavedPageComponent } from './bookmark-saved-page/bookmark-saved-page.component';

@NgModule({
  declarations: [
    BookmarkEditorComponent,
    BookmarkListComponent,
    BookmarkOverviewPageComponent,
    BookmarkOverviewComponent,
    BookmarkListComponent,
    BookmarkSavedPageComponent,
  ],
  imports: [CommonModule, BookmarkRoutingModule],
})
export class BookmarkModule {}
