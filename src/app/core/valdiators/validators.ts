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

  /**
   * Validator to check the control is more than the
   * provided min length
   * @param {number} minLength The min length to check for
   * @return {ValidatorFn} The validator
   */
  static minLength(minLength: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      // We dont validate that its required
      if (!isNil(CustomValidators.required(control))) {
        return null;
      }
      const isValid = control.value.length >= minLength;
      return isValid ? null : { minLength: true };
    };
  }

  /**
   * Validator to check the control is more than the
   * provided max length
   * @param {number} maxLength The max length to check for
   * @return {ValidatorFn} The validator
   */
  static maxLength(maxLength: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!isNil(CustomValidators.required(control))) {
        return null;
      }
      const isValid = control.value.length <= maxLength;
      return isValid ? null : { minLength: true };
    };
  }
}
