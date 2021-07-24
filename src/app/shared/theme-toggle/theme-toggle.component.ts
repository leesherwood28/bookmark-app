import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
import { markForCheck } from 'src/app/operators/mark-for-check.operator';
import { ThemeService } from '../theme/theme.service';

@UntilDestroy()
@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeInOnEnterAnimation({ duration: 500, delay: 200 }),
    fadeOutOnLeaveAnimation({ duration: 200 }),
  ],
})
/**
 * Component is used to toggle between light and dark theme
 * for the application
 */
export class ThemeToggleComponent implements OnInit {
  readonly themeControl = new FormControl();

  constructor(private themeService: ThemeService, private cd: ChangeDetectorRef) {}

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
      .pipe(untilDestroyed(this), markForCheck(this.cd))
      .subscribe((theme) =>
        this.themeControl.setValue(theme === 'dark', { emitEvent: false })
      );
  }
}
