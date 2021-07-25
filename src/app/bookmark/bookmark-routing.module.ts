import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkOverviewComponent } from './bookmark-overview/bookmark-overview.component';
import { BookmarkSavedPageComponent } from './bookmark-saved-page/bookmark-saved-page.component';
import { BookmarkSavedPageGuard } from './bookmark-saved-page/bookmark-saved-page.guard';

const routes: Routes = [
  {
    path: 'success',
    component: BookmarkSavedPageComponent,
    canActivate: [BookmarkSavedPageGuard],
  },
  {
    path: '',
    component: BookmarkOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookmarkRoutingModule {}