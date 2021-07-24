import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ThemeSwitchComponent } from './theme-switch/theme-switch.component';

@NgModule({
  declarations: [HeaderComponent, ThemeSwitchComponent],
  imports: [CommonModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
