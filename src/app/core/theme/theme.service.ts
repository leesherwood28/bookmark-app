import { Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { PersistStorageProviderService } from '../store/persist-storage-provider.service';
import { Store } from '../store/store';
import { Theme } from './theme.type';

@Injectable({
  providedIn: 'root',
})
/**
 * Used to get and set the application theme
 */
export class ThemeService {
  private readonly themeStore = new Store<Theme>({
    key: 'theme',
    initState: 'dark',
    persistentStorageProvider: this.persistStore,
  });

  constructor(@Optional() private persistStore: PersistStorageProviderService) {}

  /**
   * Selects the current theme of the application
   * @return {Observable<Theme>} An observable of the theme
   */
  selectTheme(): Observable<Theme> {
    return this.themeStore.selectState();
  }

  /**
   * Sets the new theme
   * @param {Theme} theme The new theme to set
   */
  setTheme(theme: Theme) {
    this.themeStore.setState(theme);
  }
}
