import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarkEditorComponent } from './bookmark-editor.component';

@NgModule({
  declarations: [BookmarkEditorComponent],
  imports: [CommonModule],
  exports: [BookmarkEditorComponent],
})
export class BookmarkEditorModule {}
