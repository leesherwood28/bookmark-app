import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkSavedPageComponent } from './bookmark-saved-page.component';

const routes: Routes = [{ path: '', component: BookmarkSavedPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookmarkSavedPageRoutingModule { }
