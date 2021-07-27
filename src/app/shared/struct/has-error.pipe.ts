import { Pipe, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';

@Pipe({
  name: 'hasError',
})
export class HasErrorPipe implements PipeTransform {
  transform(control: FormControl, error: string): unknown {
    return control?.errors?.[error];
  }
}
