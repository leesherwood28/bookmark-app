import { Pipe, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';

/**
 * Pipe allows us to evaluate the errors on
 * the provided form control
 */
@Pipe({
  name: 'hasError',
  pure: false,
})
export class HasErrorPipe implements PipeTransform {
  transform(control: FormControl, error: string): any {
    return control?.errors?.[error];
  }
}
