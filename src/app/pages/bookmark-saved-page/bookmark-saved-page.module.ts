import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarkOverviewModule } from 'src/app/features/bookmark-overview/bookmark-overview.module';
import { BookmarkSavedPageComponent } from './bookmark-saved-page.component';
import { BookmarkSavedPageRoutingModule } from './bookmark-saved-page-routing.module';

@NgModule({
  declarations: [BookmarkSavedPageComponent],
  imports: [CommonModule, BookmarkOverviewModule, BookmarkSavedPageRoutingModule],
})
export class BookmarkSavedPageModule {}
