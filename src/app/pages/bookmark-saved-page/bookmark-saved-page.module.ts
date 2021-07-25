import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarkOverviewModule } from 'src/app/features/bookmark-overview/bookmark-overview.module';
import { BookmarkSavedPageComponent } from './bookmark-saved-page.component';

@NgModule({
  declarations: [BookmarkSavedPageComponent],
  imports: [CommonModule, BookmarkOverviewModule],
})
export class BookmarkSavedPageModule {}
