import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ThemeService } from './shared/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
/**
 * The main app component
 */
export class AppComponent {
  readonly isLightTheme$: Observable<boolean>;

  constructor(private themeService: ThemeService) {
    this.isLightTheme$ = this.themeService
      .selectTheme()
      .pipe(map((theme) => theme === 'light'));
  }
}
