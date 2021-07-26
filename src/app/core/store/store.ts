import { BehaviorSubject, Observable } from 'rxjs';

export abstract class Store<T> {
  private readonly storedState$: BehaviorSubject<T>;

  constructor(private name: string) {
    this.initStore();
  }

  private initStore() {
    this.storedState$ = new BehaviorSubject<T>();
  }

  protected update(data: Readonly<T>) {}

  protected getData(): T {
    return this.storedState$.value;
  }

  protected selectData(): Observable<T> {
    return this.storedState$.asObservable();
  }
}
