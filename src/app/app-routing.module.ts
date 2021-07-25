import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'success',
    loadChildren: () =>
      import('./pages/bookmark-saved-page/bookmark-saved-page.module').then(
        (m) => m.BookmarkSavedPageModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/overview-page/overview-page.module').then(
        (m) => m.OverviewPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
/**
 * The main app routing module
 */
export class AppRoutingModule {}
