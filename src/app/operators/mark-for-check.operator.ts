import { ChangeDetectorRef } from '@angular/core';
import { Observable, OperatorFunction, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

/**
 * Operator that marks for check on the provided change detector ref
 * @param {ChangeDetectorRef} cd The change detector ref to mark for check
 * @return {OperatorFunction<T,T>} Operator function for mark for check
 */
export function markForCheck<T>(cd: ChangeDetectorRef): OperatorFunction<T, T> {
  return (source: Observable<T>) =>
    source.pipe(
      tap(() => cd.markForCheck()),
      catchError((err) => {
        cd.markForCheck();
        return throwError(err);
      })
    );
}
