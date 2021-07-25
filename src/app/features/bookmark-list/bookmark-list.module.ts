import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarkListComponent } from './bookmark-list.component';

@NgModule({
  declarations: [BookmarkListComponent],
  imports: [CommonModule],
  exports: [BookmarkListComponent],
})
export class BookmarkListModule {}
