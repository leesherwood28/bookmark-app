import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ThemeService } from './core/theme/theme.service';
import { routeAnimations } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [routeAnimations],
})
/**
 * The main app component
 */
export class AppComponent {
  @ViewChild(RouterOutlet) outlet!: RouterOutlet;

  readonly isLightTheme$: Observable<boolean>;

  constructor(private themeService: ThemeService) {
    this.isLightTheme$ = this.themeService
      .selectTheme()
      .pipe(map((theme) => theme === 'light'));
  }

  prepareRoute() {
    return (
      this.outlet &&
      this.outlet.activatedRouteData &&
      this.outlet.activatedRouteData.animation
    );
  }
}
