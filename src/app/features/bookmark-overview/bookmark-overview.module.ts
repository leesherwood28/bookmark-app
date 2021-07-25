import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarkOverviewComponent } from './bookmark-overview.component';

@NgModule({
  declarations: [BookmarkOverviewComponent],
  imports: [CommonModule],
  exports: [BookmarkOverviewComponent],
})
export class BookmarkOverviewModule {}
