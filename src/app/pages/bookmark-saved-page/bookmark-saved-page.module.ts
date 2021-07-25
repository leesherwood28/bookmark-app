import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookmarkSavedPageRoutingModule } from './bookmark-saved-page-routing.module';
import { BookmarkSavedPageComponent } from './bookmark-saved-page.component';


@NgModule({
  declarations: [
    BookmarkSavedPageComponent
  ],
  imports: [
    CommonModule,
    BookmarkSavedPageRoutingModule
  ]
})
export class BookmarkSavedPageModule { }
