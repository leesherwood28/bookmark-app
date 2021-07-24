import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ThemeToggleModule } from '../theme-toggle/theme-toggle.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, ThemeToggleModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
