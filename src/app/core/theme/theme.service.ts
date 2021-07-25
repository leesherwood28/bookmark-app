import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Theme } from './theme.type';

@Injectable({
  providedIn: 'root',
})
/**
 * Used to get and set the application theme
 */
export class ThemeService {
  private readonly theme$ = new BehaviorSubject<Theme>('light');

  /**
   * Selects the current theme of the application
   * @return {Observable<Theme>} An observable of the theme
   */
  selectTheme(): Observable<Theme> {
    return this.theme$.asObservable();
  }

  /**
   * Sets the new theme
   * @param {Theme} theme The new theme to set
   */
  setTheme(theme: Theme) {
    this.theme$.next(theme);
  }
}
