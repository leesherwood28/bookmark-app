import { BehaviorSubject, Observable } from 'rxjs';
import { isNil } from '../util/is-nil.fn';
import { PersistStorageProviderService } from './persist-storage-provider.service';

export class Store<T> {
  private storedState$!: BehaviorSubject<T>;

  constructor(
    private key: string,
    private initState: T,
    private persistStore?: PersistStorageProviderService
  ) {
    this.initializeStore();
  }

  private initializeStore() {
    const initialState = this.getInitialState();
    this.storedState$ = new BehaviorSubject<T>(initialState);
  }

  protected update(data: Readonly<T>) {}

  protected getData(): T {
    return this.storedState$.value;
  }

  protected selectData(): Observable<T> {
    return this.storedState$.asObservable();
  }

  /**
   * Gets the initial data
   * @return {T} The initial state
   */
  private getInitialState(): T {
    if (!this.canUsePersistence()) {
      return this.initState;
    }

    const persistedState = this.persistStore?.getPersistedData(this.key) as T | null;
    if (!isNil(persistedState)) {
      return persistedState;
    }
    return this.initState;
  }

  /**
   * Determines if persistence can be used
   * @return {boolean} value indicating if persistence can be used
   */
  private canUsePersistence(): boolean {
    return !isNil(this.persistStore) && this.persistStore.storageAvailable();
  }
}
