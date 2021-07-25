import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkSavedPageComponent } from './bookmark-saved-page.component';
import { BookmarkSavedPageGuard } from './bookmark-saved-page.guard';

const routes: Routes = [
  {
    path: '',
    component: BookmarkSavedPageComponent,
    canActivate: [BookmarkSavedPageGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookmarkSavedPageRoutingModule {}
