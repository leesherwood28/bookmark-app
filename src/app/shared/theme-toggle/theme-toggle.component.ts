import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ThemeService } from '../theme/theme.service';

@UntilDestroy()
@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
/**
 * Component is used to toggle between light and dark theme
 * for the application
 */
export class ThemeToggleComponent implements OnInit {
  readonly themeControl = new FormControl();

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.setupThemeChangeSub();
    this.setupThemeUpdateSub();
  }

  /**
   * Sets up a subcription that ensures theme changes
   * are reflected in the state of the toggle control
   */
  private setupThemeChangeSub() {
    this.themeControl.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((isDarkTheme: boolean) => {
        this.themeService.setTheme(isDarkTheme ? 'dark' : 'light');
      });
  }

  /**
   * Sets up a subscription that ensure toggles to the
   * theme update the global theme state
   */
  private setupThemeUpdateSub() {
    this.themeService
      .selectTheme()
      .pipe(untilDestroyed(this))
      .subscribe((theme) =>
        this.themeControl.setValue(theme === 'dark', { emitEvent: false })
      );
  }
}
