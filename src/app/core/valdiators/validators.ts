import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { isNil } from '../util/is-nil.fn';

/**
 * Writing custom validators
 */
export class CustomValidators {
  /**
   * Validator to check the control is required
   * @param {AbstractControl} control The control to check
   * @return {ValidationErrors | null} Validation error or null
   */
  static required(control: AbstractControl): ValidationErrors | null {
    const isInvalid = isNil(control.value) || control.value.length === 0;

    return isInvalid ? { required: true } : null;
  }

  static minLength(minLength: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!isNil(CustomValidators.required(control))) {
        return null;
      }
      const isValid = control.value.length >= minLength;
      return isValid ? null | {'minLength': true};
    };
  }
}
