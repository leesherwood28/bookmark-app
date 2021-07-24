import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header.component';
import { ThemeToggleModule } from '../theme-toggle/theme-toggle.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, ThemeToggleModule, MatIconModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
