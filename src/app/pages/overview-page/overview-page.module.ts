import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookmarkEditorModule } from 'src/app/bookmark/bookmark-editor/bookmark-editor.module';
import { BookmarkListModule } from 'src/app/bookmark/bookmark-list/bookmark-list.module';
import { OverviewPageRoutingModule } from './overview-page-routing.module';
import { OverviewPageComponent } from './overview-page.component';

@NgModule({
  declarations: [OverviewPageComponent],
  imports: [
    CommonModule,
    OverviewPageRoutingModule,
    BookmarkEditorModule,
    BookmarkListModule,
  ],
})
export class OverviewPageModule {}
