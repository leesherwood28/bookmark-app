import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { ThemeToggleModule } from '../theme-toggle/theme-toggle.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    ThemeToggleModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
