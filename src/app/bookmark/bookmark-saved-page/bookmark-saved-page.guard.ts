import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { isNil } from 'src/app/core/util/is-nil.fn';

/**
 * Gaurds the bookmark save route such that
 * its not navigated too falsley
 */
@Injectable({
  providedIn: 'root',
})
export class BookmarkSavedPageGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot): boolean {
    return !isNil(route.queryParams.bookmarkId) && !isNil(route.queryParams.type);
  }
}
