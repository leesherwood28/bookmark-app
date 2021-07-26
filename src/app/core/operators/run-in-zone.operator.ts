import { NgZone } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';

/**
 * Ensures that values run through this pipe are run
 * in the angular zone and thus trigger a tick of angular
 * zone
 * @param {NgZone} zone The angular zone
 * @return {OperatorFunction<T,T>} The operator that runs in zone
 */
export function runInZone<T>(zone: NgZone): OperatorFunction<T, T> {
  return (source) =>
    new Observable((observer) => {
      const onNext = (value: T) => zone.run(() => observer.next(value));
      const onError = (e: any) => zone.run(() => observer.error(e));
      const onComplete = () => zone.run(() => observer.complete());
      return source.subscribe(onNext, onError, onComplete);
    });
}
