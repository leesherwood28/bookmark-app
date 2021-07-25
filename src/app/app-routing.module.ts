import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/overview-page/overview-page.module').then(
        (m) => m.OverviewPageModule
      ),
  },
  { path: 'success', loadChildren: () => import('./pages/bookmark-saved-page/bookmark-saved-page.module').then(m => m.BookmarkSavedPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
/**
 * The main app routing module
 */
export class AppRoutingModule {}
