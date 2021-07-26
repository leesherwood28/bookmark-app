import { BehaviorSubject, Observable, SubscriptionLike } from 'rxjs';
import { isNil } from '../util/is-nil.fn';
import { PersistStorageProviderService } from './persist-storage-provider.service';

export class Store<T> {
  private storedState$!: BehaviorSubject<T>;
  private foreignDataSub!: SubscriptionLike;

  constructor(
    private key: string,
    private initState: T,
    private persistStore?: PersistStorageProviderService
  ) {
    this.initializeStore();
  }

  /**
   * Destorys the resources of the store
   */
  destroy() {
    if (this.foreignDataSub) {
      this.foreignDataSub.unsubscribe();
    }
  }

  /**
   * Sets the store state
   * @param {T} state The state to set
   */
  setState(state: T) {
    this.storedState$.next(state);
    if (this.canUsePersistence()) {
      this.persistStore?.setPersistedData(this.key, state);
    }
  }

  /**
   * Gets the store state
   * @return {T} the store state
   */
  getState(): T {
    return this.storedState$.value;
  }

  /**
   * Selects the store state
   * @return {Observable<T>} The store state selection
   */
  selectState(): Observable<T> {
    return this.storedState$.asObservable();
  }

  /**
   * Subscribes to foreign data updates
   */
  private subscribeForeignDataUpdates() {
    if (!this.canUsePersistence() || !this.persistStore?.selectForeignUpdateToData) {
      return;
    }
    this.foreignDataSub = this.persistStore
      ?.selectForeignUpdateToData(this.key)
      .subscribe((state) => {
        this.storedState$.next(state);
      });
  }

  /**
   * Initialises the store
   */
  private initializeStore() {
    const initialState = this.getInitialState();
    this.storedState$ = new BehaviorSubject<T>(initialState);
    this.subscribeForeignDataUpdates();
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
