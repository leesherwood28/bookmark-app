import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ThemeToggleComponent } from './theme-toggle.component';

@NgModule({
  declarations: [ThemeToggleComponent],
  imports: [CommonModule, MatSlideToggleModule],
  exports: [ThemeToggleComponent],
})
export class ThemeToggleModule {}
