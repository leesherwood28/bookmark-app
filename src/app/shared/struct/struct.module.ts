import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetDirective } from './let.directive';
import { HasErrorPipe } from './has-error.pipe';
import { IncludeProtocol } from './include-protocol.pipe';

@NgModule({
  declarations: [LetDirective, HasErrorPipe, IncludeProtocol],
  imports: [CommonModule],
  exports: [LetDirective, HasErrorPipe, IncludeProtocol],
})
export class StructModule {}
