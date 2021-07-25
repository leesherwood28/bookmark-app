import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BookmarkOverviewModule } from 'src/app/bookmark/bookmark-overview/bookmark-overview.module';
import { BookmarkSavedPageRoutingModule } from './bookmark-saved-page-routing.module';
import { BookmarkSavedPageComponent } from './bookmark-saved-page.component';

@NgModule({
  declarations: [BookmarkSavedPageComponent],
  imports: [
    CommonModule,
    BookmarkOverviewModule,
    BookmarkSavedPageRoutingModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class BookmarkSavedPageModule {}
