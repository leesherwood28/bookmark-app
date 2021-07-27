import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetDirective } from './let.directive';
import { HasErrorPipe } from './has-error.pipe';

@NgModule({
  declarations: [LetDirective, HasErrorPipe],
  imports: [CommonModule],
  exports: [LetDirective, HasErrorPipe],
})
export class StructModule {}
