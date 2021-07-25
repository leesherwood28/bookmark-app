import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookmarkEditorModule } from 'src/app/features/bookmark-editor/bookmark-editor.module';
import { OverviewPageRoutingModule } from './overview-page-routing.module';
import { OverviewPageComponent } from './overview-page.component';

@NgModule({
  declarations: [OverviewPageComponent],
  imports: [CommonModule, OverviewPageRoutingModule, BookmarkEditorModule],
})
export class OverviewPageModule {}
