import { PersistStorageProviderService } from './persist-storage-provider.service';

/**
 * The options for a store
 */
export interface StoreOptions<T> {
  /**
   * The store key to store the data to
   */
  key: string;

  /**
   * The initial state of the store if not grabbed from
   * persistent storage
   */
  initState: T;

  /**
   * Optional persistent storeage provider
   */
  persistentStorageProvider?: PersistStorageProviderService;
}
