import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BookmarkListComponent } from './bookmark-list.component';

@NgModule({
  declarations: [BookmarkListComponent],
  imports: [CommonModule, MatCardModule],
  exports: [BookmarkListComponent],
})
export class BookmarkListModule {}
