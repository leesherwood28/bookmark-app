import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export abstract class PersistStorageProviderService {
  /**
   * Determines if the storage is available
   * @return {boolean} indicator if storage is available
   */
  abstract storageAvailable(): boolean;

  /**
   * Sets the persisted data with the provided
   * key and data
   * @param {string} key The key of the data to set
   * @param {any} data The data to set
   */
  abstract setPersistedData(key: string, data: any): void;

  /**
   * Gets the persisted data at the provided key
   * @param {string} key The key of the data to get
   * @return {any} the data at the key
   */
  abstract getPersistedData(key: string): any;

  /**
   * Selects foreign updates to the persistance store, for instance
   * in new windows or tabs
   * @param {string} key The key to listen for changes to
   * @return {any} The new data
   */
  abstract selectForeignUpdateToData?(key: string): Observable<any>;
}
