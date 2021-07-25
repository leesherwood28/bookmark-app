import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkOverviewComponent } from './bookmark-overview/bookmark-overview.component';

const routes: Routes = [
  {
    path: 'success',
    component: BookmarkSave,
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
