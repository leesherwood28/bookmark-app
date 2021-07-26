import { Injectable, NgZone } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { runInZone } from '../operators/run-in-zone.operator';
import { isNil } from '../util/is-nil.fn';
import { PersistStorageProviderService } from './persist-storage-provider.service';

const hasLocalStorage = () => {
  try {
    if (typeof localStorage === 'undefined') {
      return false;
    }
    const testKey = '__test-local-storage__';
    localStorage.setItem(testKey, 'test');
    localStorage.removeItem(testKey);
    return true;
  } catch {
    return false;
  }
};

@Injectable({ providedIn: 'root' })
export class LocalStorageProviderService extends PersistStorageProviderService {
  constructor(private zone: NgZone) {
    super();
  }

  private readonly hasLocalStorage = hasLocalStorage();

  /**
   * Determines if the storage is available
   * @return {boolean} indicator if storage is available
   */
  storageAvailable(): boolean {
    return this.hasLocalStorage;
  }

  /**
   * Sets the persisted data with the provided
   * key and data
   * @param {string} key The key of the data to set
   * @param {any} data The data to set
   */
  setPersistedData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  /**
   * Gets the persisted data at the provided key
   * @param {string} key The key of the data to get
   * @return {any} the data at the key
   */
  getPersistedData(key: string): any {
    return localStorage.getItem(key);
  }

  /**
   * Selects foreign updates to the persistance store, for instance
   * in new windows or tabs
   * @param {string} key The key to listen for changes to
   * @return {any} The new data
   */
  selectForiegnUpdateToData(key: string): Observable<any> {
    return fromEvent<StorageEvent>(window, 'storage').pipe(
      filter((e: StorageEvent) => e.key === key),
      map((e) => (isNil(e.newValue) ? e.newValue : JSON.parse(e.newValue))),
      runInZone(this.zone)
    );
  }
}
