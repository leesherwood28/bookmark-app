import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { ThemeToggleComponent } from './theme-toggle.component';

@NgModule({
  declarations: [ThemeToggleComponent],
  imports: [CommonModule, MatSlideToggleModule, ReactiveFormsModule],
  exports: [ThemeToggleComponent],
})
export class ThemeToggleModule {}
