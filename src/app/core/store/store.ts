import { BehaviorSubject, Observable, SubscriptionLike } from 'rxjs';
import { isNil } from '../util/is-nil.fn';
import { StoreOptions } from './store-options';

export class Store<T> {
  private storedState$!: BehaviorSubject<T>;
  private foreignDataSub!: SubscriptionLike;

  constructor(private options: StoreOptions<T>) {
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
      this.options.persistentStorageProvider?.setPersistedData(this.options.key, state);
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
    if (
      !this.canUsePersistence() ||
      !this.options?.persistentStorageProvider?.selectForeignUpdateToData
    ) {
      return;
    }
    this.foreignDataSub = this.options.persistentStorageProvider
      ?.selectForeignUpdateToData(this.options.key)
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
      return this.options.initState;
    }

    const persistedState = this.options.persistentStorageProvider?.getPersistedData(
      this.options.key
    ) as T | null;
    if (!isNil(persistedState)) {
      return persistedState;
    }
    return this.options.initState;
  }

  /**
   * Determines if persistence can be used
   * @return {boolean} value indicating if persistence can be used
   */
  private canUsePersistence(): boolean {
    return (
      !isNil(this.options.persistentStorageProvider) &&
      this.options.persistentStorageProvider.storageAvailable()
    );
  }
}
