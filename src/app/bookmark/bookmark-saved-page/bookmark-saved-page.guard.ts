import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { isNil } from 'src/app/util/is-nil.fn';

@Injectable({
  providedIn: 'root',
})
export class BookmarkSavedPageGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot): boolean {
    return !isNil(route.queryParams.bookmarkId) && !isNil(route.queryParams.type);
  }
}
