import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkOverviewPageComponent } from './bookmark-overview-page/bookmark-overview-page.component';
import { BookmarkSavedPageComponent } from './bookmark-saved-page/bookmark-saved-page.component';
import { BookmarkSavedPageGuard } from './bookmark-saved-page/bookmark-saved-page.guard';

const routes: Routes = [
  {
    path: 'success',
    component: BookmarkSavedPageComponent,
    canActivate: [BookmarkSavedPageGuard],
    data: {
      animation: 'isRight',
    },
  },
  {
    path: '',
    component: BookmarkOverviewPageComponent,
    data: {
      animation: 'isLeft',
    },
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookmarkRoutingModule {}
