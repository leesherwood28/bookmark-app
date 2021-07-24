import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ThemeSwitchComponent } from './theme-switch/theme-switch.component';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';

@NgModule({
  declarations: [HeaderComponent, ThemeSwitchComponent, ThemeToggleComponent],
  imports: [CommonModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
