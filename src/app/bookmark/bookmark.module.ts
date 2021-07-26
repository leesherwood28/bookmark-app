import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  imports: [
    CommonModule,
    BookmarkRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatDividerModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class BookmarkModule {}
